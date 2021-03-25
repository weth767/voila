package br.com.voila.backend.voilabackend.mapper;

import br.com.voila.backend.voilabackend.dto.ItemCategoryDTO;
import br.com.voila.backend.voilabackend.model.ItemCategory;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {})
public interface ItemCategoryMapper {

    ItemCategory toEntity(ItemCategoryDTO person);
    ItemCategoryDTO toDTO(ItemCategory person);
}
