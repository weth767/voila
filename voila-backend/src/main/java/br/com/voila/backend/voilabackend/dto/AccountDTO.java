package br.com.voila.backend.voilabackend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AccountDTO {
    private String email;
    private String username;
    private String password;
}
