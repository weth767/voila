package br.com.voila.backend.voilabackend.dto;

import br.com.voila.backend.voilabackend.enums.OrderStatusEnum;
import br.com.voila.backend.voilabackend.enums.PaymentTypeEnum;
import br.com.voila.backend.voilabackend.model.Item;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
public class OrderDTO {
    private Long id;
    private LocalDate dateTime;
    private BigDecimal totalValue;
    private Boolean needExchange;
    private BigDecimal exchange;
    private PaymentTypeEnum paymentType;
    private Boolean needDelivery;
    private RestaurantDTO restaurant;
    private DeliveryPersonDTO deliveryperson;
    private ClientDTO client;
    private List<ItemDTO> items;
    private OrderStatusEnum status;
}
