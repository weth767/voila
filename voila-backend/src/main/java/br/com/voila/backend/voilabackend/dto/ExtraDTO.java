package br.com.voila.backend.voilabackend.dto;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class ExtraDTO {

    private Long id;
    private String description;
    private BigDecimal price;
    private Boolean isActive;
    private byte[] image;
    private ItemCategoryDTO itemCategory;
}
