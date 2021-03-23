package br.com.voila.backend.voilabackend.mapper;

import br.com.voila.backend.voilabackend.domain.PersonDomain;
import br.com.voila.backend.voilabackend.dto.inclusion.PersonInclusionDTO;
import br.com.voila.backend.voilabackend.model.Person;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = AccountMapper.class)
public interface PersonMapper {
    Person toEntity(PersonDomain personDomain);
    PersonDomain toDomain(PersonInclusionDTO personInclusion);
}
