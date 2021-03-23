package br.com.voila.backend.voilabackend.dto.inclusion;

import br.com.voila.backend.voilabackend.enums.GenderEnum;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class PersonNaturalInclusionDTO {
    private PersonInclusionDTO person;
    private String cpf;
    private LocalDate birthday;
    private GenderEnum gender;
}
