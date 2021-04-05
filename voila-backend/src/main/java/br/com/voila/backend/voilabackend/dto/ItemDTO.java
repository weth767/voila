package br.com.voila.backend.voilabackend.dto;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.List;

@Getter
@Setter
public class ItemDTO {
    private Long id;
    private String description;
    private BigDecimal price;
    private Boolean isActive;
    private byte[] image;
    private ItemCategoryDTO itemCategory;
    private Long restaurantId;
    private List<ExtraDTO> extras;
}
