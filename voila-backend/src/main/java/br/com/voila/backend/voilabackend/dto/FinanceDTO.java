package br.com.voila.backend.voilabackend.dto;

import br.com.voila.backend.voilabackend.enums.OrderStatusEnum;
import br.com.voila.backend.voilabackend.enums.PaymentTypeEnum;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;

@Setter
@Getter
public class FinanceDTO {
    private Long id;
    private LocalDate dateTime;
    private BigDecimal totalValue;
    private PaymentTypeEnum paymentType;
    private OrderStatusEnum status;
}
