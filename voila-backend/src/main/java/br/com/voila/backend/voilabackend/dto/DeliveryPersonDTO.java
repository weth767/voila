package br.com.voila.backend.voilabackend.dto;

import br.com.voila.backend.voilabackend.enums.VehicleTypeEnum;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DeliveryPersonDTO {
    private Long id;
    private PersonNaturalDTO personNatural;
    private PersonLegalDTO personLegal;
    private VehicleTypeEnum vehicleType;
}
