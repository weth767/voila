package br.com.voila.backend.voilabackend.dto.inclusion;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AccountInclusionDTO {
    private String email;
    private String username;
    private String password;
}
