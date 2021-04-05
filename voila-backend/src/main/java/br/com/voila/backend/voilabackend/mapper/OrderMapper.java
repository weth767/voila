package br.com.voila.backend.voilabackend.mapper;

import br.com.voila.backend.voilabackend.dto.FinanceDTO;
import br.com.voila.backend.voilabackend.dto.OrderDTO;
import br.com.voila.backend.voilabackend.model.Order;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring", uses = {RestaurantMapper.class,ClientMapper.class,ItemMapper.class})
@Component
public interface OrderMapper {

    Order toEntity(OrderDTO clientDTO);
    OrderDTO toDTO(Order client);
    FinanceDTO toFinance(Order order);
}
