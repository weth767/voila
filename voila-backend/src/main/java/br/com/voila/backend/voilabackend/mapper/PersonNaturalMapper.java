package br.com.voila.backend.voilabackend.mapper;

import br.com.voila.backend.voilabackend.dto.PersonDTO;
import br.com.voila.backend.voilabackend.dto.PersonNaturalDTO;
import br.com.voila.backend.voilabackend.model.PersonNatural;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring", uses = PersonMapper.class)
@Component
public interface PersonNaturalMapper {
    PersonNatural toEntity(PersonNaturalDTO personNaturalDTO);
    PersonDTO toDTO(PersonNatural personNatural);
}
