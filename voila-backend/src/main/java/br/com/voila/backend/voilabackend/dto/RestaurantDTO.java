package br.com.voila.backend.voilabackend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RestaurantDTO {
    private Long id;
    private PersonLegalDTO personLegal;
    private Boolean open;
}
