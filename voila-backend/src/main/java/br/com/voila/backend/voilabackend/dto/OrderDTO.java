package br.com.voila.backend.voilabackend.dto;

import br.com.voila.backend.voilabackend.enums.PaymentTypeEnum;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;

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
}
