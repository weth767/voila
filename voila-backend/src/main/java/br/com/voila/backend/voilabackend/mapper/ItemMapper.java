package br.com.voila.backend.voilabackend.mapper;

import br.com.voila.backend.voilabackend.dto.ItemDTO;
import br.com.voila.backend.voilabackend.model.Item;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {ExtraMapper.class,RestaurantMapper.class})
public interface ItemMapper {

    Item toEntity(ItemDTO person);
    ItemDTO toDTO(Item person);
}
