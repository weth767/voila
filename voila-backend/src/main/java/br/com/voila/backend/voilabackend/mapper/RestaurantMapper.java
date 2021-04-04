package br.com.voila.backend.voilabackend.mapper;

import br.com.voila.backend.voilabackend.dto.RestaurantDTO;
import br.com.voila.backend.voilabackend.model.Restaurant;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = ItemMapper.class)
public interface RestaurantMapper {

    Restaurant toEntity(RestaurantDTO restaurantDTO);
    RestaurantDTO toDTO(Restaurant restaurant);
}
