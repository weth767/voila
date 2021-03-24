package br.com.voila.backend.voilabackend.service;

import br.com.voila.backend.voilabackend.dto.AccountDTO;
import br.com.voila.backend.voilabackend.enums.AccountTypeEnum;
import br.com.voila.backend.voilabackend.exception.ParametrizedMessageException;
import br.com.voila.backend.voilabackend.mapper.AccountMapper;
import br.com.voila.backend.voilabackend.model.PersonNatural;
import br.com.voila.backend.voilabackend.repository.PersonNaturalRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class ClientService {

    private final AccountMapper accountMapper;
    private final PersonNaturalRepository personNaturalRepository;

    public AccountDTO save(PersonNatural personNatural) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        personNatural.getPerson().getAccount().setPassword(
                passwordEncoder.encode(
                        personNatural.getPerson().getAccount().getPassword()
                )
        );
        personNatural.getPerson().getAccount().setAccountType(AccountTypeEnum.CLIENT);
        personNatural = personNaturalRepository.save(personNatural);
        AccountDTO account = accountMapper.toDTO(personNatural.getPerson().getAccount());
        account.setPassword(null);
        return account;
    }

    public void update(String cpf, PersonNatural personNatural) {
        PersonNatural searchedPersonNatural = personNaturalRepository.findByCpf(cpf)
                .orElseThrow(() -> new ParametrizedMessageException("Dados do usuário não encontrados"));
        searchedPersonNatural.setBirthday(personNatural.getBirthday());
        searchedPersonNatural.setGender(personNatural.getGender());
        searchedPersonNatural.getPerson().setName(personNatural.getPerson().getName());
        searchedPersonNatural.getPerson().setImage(personNatural.getPerson().getImage());
        searchedPersonNatural.getPerson().setPhone(personNatural.getPerson().getPhone());
        personNaturalRepository.saveAndFlush(searchedPersonNatural);
    }
}
