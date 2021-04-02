package br.com.voila.backend.voilabackend.mapper;

import br.com.voila.backend.voilabackend.dto.CityDTO;
import br.com.voila.backend.voilabackend.model.City;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {})
public interface CityMapper {

    City toEntity(CityDTO city);
    CityDTO toDTO(City city);
}
