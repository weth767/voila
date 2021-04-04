package br.com.voila.backend.voilabackend.model;


import br.com.voila.backend.voilabackend.enums.OrderStatusEnum;
import br.com.voila.backend.voilabackend.enums.PaymentTypeEnum;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "order")
@Getter
@Setter
public class Order {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "datetime")
    @NotNull
    private LocalDate dateTime;

    @Column(name = "total_value")
    @NotNull
    private BigDecimal totalValue;

    @Column(name = "need_exchange")
    private Boolean needExchange;

    @Column(name = "exchange")
    private BigDecimal exchange;

    @Column(name = "payment_type")
    private PaymentTypeEnum paymentType;

    @Column(name = "need_delivery")
    private Boolean needDelivery;

    @JoinColumn(name = "restaurant_id")
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Restaurant restaurant;

    @JoinColumn(name = "deliveryperson_id")
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private DeliveryPerson deliveryperson;

    @JoinColumn(name = "client_id")
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Client client;

    @ManyToMany
    @JoinTable(name = "order_item",
            joinColumns = {@JoinColumn(name = "order_id")},
            inverseJoinColumns = {@JoinColumn(name = "item_id")}
    )
    private List<Item> items;

    @Column(name = "status")
    @Enumerated(EnumType.ORDINAL)
    private OrderStatusEnum status;
}
