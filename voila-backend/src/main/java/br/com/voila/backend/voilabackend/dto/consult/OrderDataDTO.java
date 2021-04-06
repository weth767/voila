package br.com.voila.backend.voilabackend.dto.consult;

import br.com.voila.backend.voilabackend.dto.ClientDTO;
import br.com.voila.backend.voilabackend.dto.DeliveryPersonDTO;
import br.com.voila.backend.voilabackend.dto.ItemDTO;
import br.com.voila.backend.voilabackend.dto.RestaurantDTO;
import br.com.voila.backend.voilabackend.enums.OrderStatusEnum;
import br.com.voila.backend.voilabackend.enums.PaymentTypeEnum;
import br.com.voila.backend.voilabackend.model.Item;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class OrderDataDTO {
    private Long id;
    private LocalDateTime dateTime;
    private BigDecimal totalValue;
    private Boolean needExchange;
    private BigDecimal exchange;
    private PaymentTypeEnum paymentType;
    private Boolean needDelivery;
    private ClientDTO client;
    private List<ItemDTO> items;
    private OrderStatusEnum status;
}
