package br.com.voila.backend.voilabackend.mapper;

import br.com.voila.backend.voilabackend.dto.PersonDTO;
import br.com.voila.backend.voilabackend.model.Person;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = AccountMapper.class)
public interface PersonMapper {
    Person toEntity(PersonDTO person);

    PersonDTO toDTO(Person person);
}
