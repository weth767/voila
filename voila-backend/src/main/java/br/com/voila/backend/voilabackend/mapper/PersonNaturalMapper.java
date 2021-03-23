package br.com.voila.backend.voilabackend.mapper;

import br.com.voila.backend.voilabackend.domain.PersonNaturalDomain;
import br.com.voila.backend.voilabackend.dto.inclusion.PersonNaturalInclusionDTO;
import br.com.voila.backend.voilabackend.model.PersonNatural;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring", uses = PersonMapper.class)
@Component
public interface PersonNaturalMapper {
    PersonNatural toEntity(PersonNaturalDomain personNaturalDomain);
    PersonNaturalDomain toDomain(PersonNaturalInclusionDTO personNaturalInclusionDTO);
}
