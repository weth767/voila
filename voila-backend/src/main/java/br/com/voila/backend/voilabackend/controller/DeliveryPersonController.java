package br.com.voila.backend.voilabackend.controller;

import br.com.voila.backend.voilabackend.dto.AccountDTO;
import br.com.voila.backend.voilabackend.service.DeliveryPersonService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/delivery-person")
@RequiredArgsConstructor
public class DeliveryPersonController {
    private final DeliveryPersonService deliveryPersonService;
    @GetMapping("/login")
    public ResponseEntity<AccountDTO> login(@RequestParam("email") String email,
                                            @RequestParam("password") String password) {
        return ResponseEntity.ok(deliveryPersonService.login(email, password));
    }
}
