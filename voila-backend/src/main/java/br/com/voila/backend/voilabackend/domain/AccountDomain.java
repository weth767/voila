package br.com.voila.backend.voilabackend.domain;

import br.com.voila.backend.voilabackend.enums.AccountTypeEnum;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
@Setter
public class AccountDomain {
    @Email
    @NotNull
    @Size(max = 150)
    private String email;
    @NotNull
    @Size(max = 80)
    private String username;
    @NotNull
    @Size(max = 50)
    private String password;
    @NotNull
    private AccountTypeEnum accountType;
}
