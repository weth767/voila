package br.com.voila.backend.voilabackend.dto;

import br.com.voila.backend.voilabackend.enums.GenderEnum;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class PersonNaturalDTO {
    private PersonDTO person;
    private String cpf;
    private LocalDate birthday;
    private GenderEnum gender;
}
