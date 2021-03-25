package br.com.voila.backend.voilabackend.dto;

import br.com.voila.backend.voilabackend.enums.StateEnum;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CityDTO {
    private Long id;
    private String name;
    private StateEnum state;
}
