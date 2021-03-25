package br.com.voila.backend.voilabackend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ItemCategoryDTO {

    private Long id;
    private String name;
    private Boolean isActive;
    private byte[] image;
}
