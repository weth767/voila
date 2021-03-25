package br.com.voila.backend.voilabackend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PersonLegalDTO {
    private Long id;
    private String cnpj;
    private PersonDTO person;
}
