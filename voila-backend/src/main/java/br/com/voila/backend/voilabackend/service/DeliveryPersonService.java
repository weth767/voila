package br.com.voila.backend.voilabackend.service;

import br.com.voila.backend.voilabackend.dto.AccountDTO;
import br.com.voila.backend.voilabackend.enums.AccountTypeEnum;
import br.com.voila.backend.voilabackend.exception.ParametrizedMessageException;
import br.com.voila.backend.voilabackend.mapper.AccountMapper;
import br.com.voila.backend.voilabackend.model.Account;
import br.com.voila.backend.voilabackend.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class DeliveryPersonService {
    private final AccountRepository accountRepository;
    private final AccountMapper accountMapper;

    public AccountDTO login(String email, String password) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        Account account = accountRepository
                .findByEmailAndPasswordAndAccountType(email, passwordEncoder.encode(password),
                        AccountTypeEnum.RESTAURANT)
                .orElseThrow(() -> new ParametrizedMessageException("Email ou senha incorretos"));
        AccountDTO accountDTO = accountMapper.toDTO(account);
        accountDTO.setPassword(null);
        return accountDTO;
    }
}
