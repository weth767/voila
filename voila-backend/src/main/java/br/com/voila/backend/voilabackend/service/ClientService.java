package br.com.voila.backend.voilabackend.service;

import br.com.voila.backend.voilabackend.dto.AccountDTO;
import br.com.voila.backend.voilabackend.enums.AccountTypeEnum;
import br.com.voila.backend.voilabackend.exception.ParametrizedMessageException;
import br.com.voila.backend.voilabackend.mapper.AccountMapper;
import br.com.voila.backend.voilabackend.model.Account;
import br.com.voila.backend.voilabackend.model.Client;
import br.com.voila.backend.voilabackend.repository.AccountRepository;
import br.com.voila.backend.voilabackend.repository.ClientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class ClientService {

    private final AccountRepository accountRepository;
    private final AccountMapper accountMapper;
    private final ClientRepository clientRepository;

    public AccountDTO save(Client client) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        client.getPersonNatural().getPerson().getAccount().setPassword(
                passwordEncoder.encode(
                        client.getPersonNatural().getPerson().getAccount().getPassword()
                )
        );
        client.getPersonNatural().getPerson().getAccount().setAccountType(AccountTypeEnum.CLIENT);
        client = clientRepository.save(client);
        AccountDTO account = accountMapper.toDTO(client.getPersonNatural().getPerson().getAccount());
        account.setPassword(null);
        return account;
    }

    public void update(String cpf, Client client) {
        Client searchedClient = clientRepository.findByPersonNaturalCpf(cpf)
                .orElseThrow(() -> new ParametrizedMessageException("Dados do usuário não encontrados"));
        searchedClient.getPersonNatural()
                .setBirthday(searchedClient.getPersonNatural().getBirthday());
        searchedClient.getPersonNatural()
                .setGender(searchedClient.getPersonNatural().getGender());
        searchedClient.getPersonNatural().getPerson()
                .setName(searchedClient.getPersonNatural().getPerson().getName());
        searchedClient.getPersonNatural().getPerson()
                .setImage(searchedClient.getPersonNatural().getPerson().getImage());
        searchedClient.getPersonNatural().getPerson()
                .setPhone(searchedClient.getPersonNatural().getPerson().getPhone());
        clientRepository.saveAndFlush(searchedClient);
    }

    public AccountDTO login(String email, String password) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        Account account = accountRepository.findByEmailAndPassword(email, passwordEncoder.encode(password))
                .orElseThrow(() -> new ParametrizedMessageException("Email ou senha incorretos"));
        AccountDTO accountDTO = accountMapper.toDTO(account);
        accountDTO.setPassword(null);
        return accountDTO;
    }

    public AccountDTO getUserByEmail(String email) {
        Account account = accountRepository.findByEmail(email)
                .orElseThrow(() -> new ParametrizedMessageException("Email não encontrado"));
        AccountDTO accountDTO = accountMapper.toDTO(account);
        accountDTO.setPassword(null);
        return accountDTO;
    }

    public void recoverPassword(String email, String password) {
        Account account = accountRepository.findByEmail(email)
                .orElseThrow(() -> new ParametrizedMessageException("Usuário não encontrado"));
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        account.setPassword(passwordEncoder.encode(password));
        accountRepository.save(account);
    }
}
