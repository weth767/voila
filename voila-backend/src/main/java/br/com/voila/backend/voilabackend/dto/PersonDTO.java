package br.com.voila.backend.voilabackend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PersonDTO {
    private String name;
    private String phone;
    private byte[] image;
    private AccountDTO account;
}
