package br.com.voila.backend.voilabackend.controller;

import br.com.voila.backend.voilabackend.domain.AccountDomain;
import br.com.voila.backend.voilabackend.domain.PersonNaturalDomain;
import br.com.voila.backend.voilabackend.dto.consultation.AccountConsultationDTO;
import br.com.voila.backend.voilabackend.dto.inclusion.AccountInclusionDTO;
import br.com.voila.backend.voilabackend.dto.inclusion.PersonNaturalInclusionDTO;
import br.com.voila.backend.voilabackend.enums.AccountTypeEnum;
import br.com.voila.backend.voilabackend.mapper.AccountMapper;
import br.com.voila.backend.voilabackend.mapper.PersonNaturalMapper;
import br.com.voila.backend.voilabackend.service.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RestController
@RequestMapping("/account")
@RequiredArgsConstructor
public class AccountController {
    private static final String URL = "/account";
    private final AccountService accountService;
    private final PersonNaturalMapper personNaturalMapper;

    @PostMapping("/client")
    public ResponseEntity<AccountConsultationDTO> save(
            @RequestBody PersonNaturalInclusionDTO personNaturalInclusionDTO) {
        PersonNaturalDomain personNaturalDomain = personNaturalMapper.toDomain(personNaturalInclusionDTO);
        personNaturalDomain.getPerson().getAccount().setAccountType(AccountTypeEnum.CLIENT);
        AccountConsultationDTO account = accountService.save(personNaturalDomain);
        return ResponseEntity.created(URI.create(URL + "/" + account.getEmail()))
                .body(account);
    }
}
