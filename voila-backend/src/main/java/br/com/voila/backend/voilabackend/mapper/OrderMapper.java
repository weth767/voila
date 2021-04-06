package br.com.voila.backend.voilabackend.mapper;

import br.com.voila.backend.voilabackend.dto.FinanceDTO;
import br.com.voila.backend.voilabackend.dto.OrderDTO;
import br.com.voila.backend.voilabackend.model.Client;
import br.com.voila.backend.voilabackend.model.Order;
import br.com.voila.backend.voilabackend.model.Restaurant;
import br.com.voila.backend.voilabackend.repository.ClientRepository;
import br.com.voila.backend.voilabackend.repository.RestaurantRepository;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring", uses = {ItemMapper.class})
@Component
public abstract class OrderMapper {
    @Autowired
    private ClientRepository clientRepository;
    @Autowired
    private RestaurantRepository restaurantRepository;

    @Mapping(source = "client.id", target = "client", qualifiedByName = "setClient")
    @Mapping(source = "restaurant.id", target = "restaurant", qualifiedByName = "mapRestaurant")
    public abstract Order toEntity(OrderDTO clientDTO);
    public abstract OrderDTO toDTO(Order client);
    public abstract FinanceDTO toFinance(Order order);

    @Named("mapRestaurant")
    Restaurant mapRestaurant(Long id) {
        return restaurantRepository.getOne(id);
    }

    @Named("setClient")
    Client setClient(Long id) {
        return clientRepository.getOne(id);
    }
}
