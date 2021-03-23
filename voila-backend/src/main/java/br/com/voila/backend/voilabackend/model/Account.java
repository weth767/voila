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
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "account")
@Getter
@Setter
public class Account {
    @Id
    @Column(name = "email")
    private String email;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "account_type")
    @Enumerated(EnumType.ORDINAL)
    private AccountTypeEnum accountType;
}
