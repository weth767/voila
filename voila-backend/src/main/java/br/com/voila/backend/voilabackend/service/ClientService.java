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
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Arrays;

@Service
@Transactional
@RequiredArgsConstructor
public class ClientService {

    private final AccountRepository accountRepository;
    private final AccountMapper accountMapper;
    private final ClientRepository clientRepository;

    public AccountDTO save(Client client) throws NoSuchAlgorithmException {
        MessageDigest digest = MessageDigest.getInstance("SHA-256");
        byte[] encodedhash = digest.digest(
                client.getPersonNatural().getPerson().getAccount().getPassword().getBytes(StandardCharsets.UTF_8));
        client.getPersonNatural().getPerson().getAccount().setPassword(Arrays.toString(encodedhash));
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
                .setBirthday(client.getPersonNatural().getBirthday());
        searchedClient.getPersonNatural()
                .setGender(client.getPersonNatural().getGender());
        searchedClient.getPersonNatural().getPerson()
                .setName(client.getPersonNatural().getPerson().getName());
        searchedClient.getPersonNatural().getPerson()
                .setImage(client.getPersonNatural().getPerson().getImage());
        searchedClient.getPersonNatural().getPerson()
                .setPhone(client.getPersonNatural().getPerson().getPhone());
        clientRepository.saveAndFlush(searchedClient);
    }

    public AccountDTO login(String email, String password) throws NoSuchAlgorithmException {
        MessageDigest digest = MessageDigest.getInstance("SHA-256");
        byte[] encodedhash = digest.digest(password.getBytes(StandardCharsets.UTF_8));
        Account account = accountRepository
                .findByEmailAndPasswordAndAccountType(email, Arrays.toString(encodedhash),
                        AccountTypeEnum.CLIENT)
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
