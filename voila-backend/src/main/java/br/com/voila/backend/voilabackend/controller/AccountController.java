package br.com.voila.backend.voilabackend.controller;

import br.com.voila.backend.voilabackend.dto.consultation.AccountConsultationDTO;
import br.com.voila.backend.voilabackend.dto.inclusion.AccountInclusionDTO;
import br.com.voila.backend.voilabackend.mapper.AccountMapper;
import br.com.voila.backend.voilabackend.service.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RestController
@RequestMapping("/account")
@RequiredArgsConstructor
public class AccountController {
    private static final String URL = "/account";
    private final AccountService accountService;
    private final AccountMapper accountMapper;

    @PostMapping()
    public ResponseEntity<AccountConsultationDTO> save(AccountInclusionDTO accountInclusionDTO) {
        return ResponseEntity.created(URI.create(URL))
                .body(accountService.save(accountMapper.toDomain(accountInclusionDTO)));
    }
}
