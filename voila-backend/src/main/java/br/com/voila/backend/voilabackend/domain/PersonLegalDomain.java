package br.com.voila.backend.voilabackend.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PersonLegalDomain {
    private Long id;
    private String cnpj;
    private PersonDomain person;
}
