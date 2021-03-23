package br.com.voila.backend.voilabackend.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PersonDomain {
    private Long id;
    private String name;
    private String phone;
    private byte[] image;
    private AccountDomain account;
}
