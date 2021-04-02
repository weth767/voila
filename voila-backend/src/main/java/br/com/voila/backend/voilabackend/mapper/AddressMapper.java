package br.com.voila.backend.voilabackend.mapper;

import br.com.voila.backend.voilabackend.dto.AddressDTO;
import br.com.voila.backend.voilabackend.model.Address;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = PersonMapper.class)
public interface AddressMapper {
    Address toEntity(AddressDTO address);

    AddressDTO toDTO(Address address);
}
