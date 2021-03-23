package br.com.voila.backend.voilabackend.service;

import br.com.voila.backend.voilabackend.domain.AccountDomain;
import br.com.voila.backend.voilabackend.domain.PersonDomain;
import br.com.voila.backend.voilabackend.domain.PersonNaturalDomain;
import br.com.voila.backend.voilabackend.dto.consultation.AccountConsultationDTO;
import br.com.voila.backend.voilabackend.mapper.AccountMapper;
import br.com.voila.backend.voilabackend.mapper.PersonNaturalMapper;
import br.com.voila.backend.voilabackend.model.PersonNatural;
import br.com.voila.backend.voilabackend.repository.AccountRepository;
import br.com.voila.backend.voilabackend.repository.PersonNaturalRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class AccountService {

    private final AccountMapper accountMapper;
    private final PersonNaturalMapper personNaturalMapper;
    private final PersonNaturalRepository personNaturalRepository;
    /**
     * Método para criar um novo usuário
     * @param personNaturalDomain objeto com os dados do usuário
     * @return AccountConsultationDTO objeto de consulta para os dados do usuário*/
    public AccountConsultationDTO save(PersonNaturalDomain personNaturalDomain) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        personNaturalDomain
                .getPerson()
                .getAccount()
                .setPassword(
                        passwordEncoder
                                .encode(personNaturalDomain
                                        .getPerson()
                                        .getAccount()
                                        .getPassword())
                );
        PersonNatural personNatural = personNaturalRepository
                .save(personNaturalMapper.toEntity(personNaturalDomain));
        return accountMapper.toConsult(personNatural.getPerson().getAccount());
    }
}
