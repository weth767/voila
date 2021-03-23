package br.com.voila.backend.voilabackend.dto.inclusion;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PersonInclusionDTO {
    private String name;
    private String phone;
    private byte[] image;
    private AccountInclusionDTO account;
}
