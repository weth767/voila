package br.com.voila.backend.voilabackend.controller;

import br.com.voila.backend.voilabackend.dto.AccountDTO;
import br.com.voila.backend.voilabackend.dto.ClientDTO;
import br.com.voila.backend.voilabackend.mapper.ClientMapper;
import br.com.voila.backend.voilabackend.service.ClientService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RestController
@RequestMapping("/client")
@RequiredArgsConstructor
public class ClientController {
    private static final String URL = "/account";
    private final ClientService clientService;
    private final ClientMapper clientMapper;

    @PostMapping
    public ResponseEntity<AccountDTO> save(
            @RequestBody ClientDTO clientDTO) {
        AccountDTO account = clientService.save(clientMapper.toEntity(clientDTO));
        return ResponseEntity.created(URI.create(URL + "/" + account.getEmail()))
                .body(account);
    }

    @PutMapping("/{cpf}")
    public ResponseEntity<Void> update(@PathVariable String cpf, @RequestBody ClientDTO clientDTO) {
        clientService.update(cpf, clientMapper.toEntity(clientDTO));
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<AccountDTO> login(@RequestParam("email") String email,
                                            @RequestParam("password") String password) {
        return ResponseEntity.ok(clientService.login(email, password));
    }
}
