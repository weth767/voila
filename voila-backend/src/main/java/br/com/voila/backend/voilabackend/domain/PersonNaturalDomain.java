package br.com.voila.backend.voilabackend.domain;

import br.com.voila.backend.voilabackend.enums.GenderEnum;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class PersonNaturalDomain {
    private Long id;
    private String cpf;
    private LocalDate birthday;
    private GenderEnum gender;
    private PersonDomain person;
}
