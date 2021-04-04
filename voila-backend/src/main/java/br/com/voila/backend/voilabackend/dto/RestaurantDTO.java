package br.com.voila.backend.voilabackend.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class RestaurantDTO {
    private Long id;
    private PersonLegalDTO personLegal;
    private Boolean open;
    private List<ItemDTO> items = new ArrayList<>();
}
