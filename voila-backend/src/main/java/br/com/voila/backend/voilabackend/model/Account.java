package br.com.voila.backend.voilabackend.model;

import br.com.voila.backend.voilabackend.enums.AccountTypeEnum;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "account")
@Getter
@Setter
public class Account {
    @Id
    @Column(name = "email")
    @Email
    @NotNull
    @Size(max = 150)
    @NotBlank
    @Email
    private String email;

    @NotNull
    @Size(max = 80)
    @NotEmpty
    @NotBlank
    @Column(name = "username")
    private String username;

    @Column(name = "password")
    @NotNull
    @NotEmpty
    @NotBlank
    @Size(max = 80)
    private String password;

    @Column(name = "account_type")
    @Enumerated(EnumType.ORDINAL)
    @NotNull
    private AccountTypeEnum accountType;
}
