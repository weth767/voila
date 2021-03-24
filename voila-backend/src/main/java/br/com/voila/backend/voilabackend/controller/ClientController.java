package br.com.voila.backend.voilabackend.controller;

import br.com.voila.backend.voilabackend.dto.AccountDTO;
import br.com.voila.backend.voilabackend.dto.PersonNaturalDTO;
import br.com.voila.backend.voilabackend.mapper.PersonNaturalMapper;
import br.com.voila.backend.voilabackend.service.ClientService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RestController
@RequestMapping("/client")
@RequiredArgsConstructor
public class ClientController {
    private static final String URL = "/account";
    private final ClientService clientService;
    private final PersonNaturalMapper personNaturalMapper;

    @PostMapping
    public ResponseEntity<AccountDTO> save(
            @RequestBody PersonNaturalDTO personNaturalDTO) {
        AccountDTO account = clientService.save(personNaturalMapper.toEntity(personNaturalDTO));
        return ResponseEntity.created(URI.create(URL + "/" + account.getEmail()))
                .body(account);
    }

    @PutMapping("/{cpf}")
    public ResponseEntity<Void> update(@PathVariable String cpf, @RequestBody PersonNaturalDTO personNaturalDTO) {
        clientService.update(cpf, personNaturalMapper.toEntity(personNaturalDTO));
        return ResponseEntity.ok().build();
    }
}
