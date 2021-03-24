package br.com.voila.backend.voilabackend.mapper;

import br.com.voila.backend.voilabackend.dto.ExtraDTO;
import br.com.voila.backend.voilabackend.model.Extra;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {})
public interface ExtraMapper {

    Extra toEntity(ExtraDTO person);
    ExtraDTO toDTO(Extra person);
}
