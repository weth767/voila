package br.com.voila.backend.voilabackend.mapper;

import br.com.voila.backend.voilabackend.dto.ItemDTO;
import br.com.voila.backend.voilabackend.model.Item;
import br.com.voila.backend.voilabackend.model.Restaurant;
import br.com.voila.backend.voilabackend.repository.RestaurantRepository;
import lombok.RequiredArgsConstructor;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.springframework.beans.factory.annotation.Autowired;

@Mapper(componentModel = "spring", uses = {ExtraMapper.class,RestaurantMapper.class})
public abstract class ItemMapper {
    @Autowired
    private RestaurantRepository restaurantRepository;

    @Mapping(source = "restaurantId", target = "restaurant", qualifiedByName = "setRestaurant")
    public abstract Item toEntity(ItemDTO person);
    public abstract ItemDTO toDTO(Item person);

    @Named("setRestaurant")
    Restaurant setRestaurant(Long id) {
        return restaurantRepository.getOne(id);
    }
}
