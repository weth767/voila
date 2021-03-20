package br.com.voila.backend.voilabackend.service;

import br.com.voila.backend.voilabackend.domain.AccountDomain;
import br.com.voila.backend.voilabackend.dto.consultation.AccountConsultationDTO;
import br.com.voila.backend.voilabackend.mapper.AccountMapper;
import br.com.voila.backend.voilabackend.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class AccountService {

    private final AccountMapper accountMapper;
    private final AccountRepository accountRepository;
    /**
     * Método para criar um novo usuário
     * @param accountDomain objeto com os dados do usuário
     * @return AccountConsultationDTO objeto de consulta para os dados do usuário*/
    public AccountConsultationDTO save(AccountDomain accountDomain) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        //validar as regras de negócio no domain
        accountDomain.setPassword(passwordEncoder.encode(accountDomain.getPassword()));
        return accountMapper.toConsult(accountRepository.save(accountMapper.toEntity(accountDomain)));
    }
}
