package br.com.voila.backend.voilabackend.model;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name = "item")
@Getter
@Setter
public class Item {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "description")
    @NotNull
    private String description;

    @Column(name = "price")
    @NotNull
    private BigDecimal price;

    @Column(name = "is_active")
    private Boolean isActive;

    @Column(name = "image")
    private byte[] image;

    @JoinColumn(name = "restaurant_id")
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Restaurant restaurant;

    @JoinColumn(name = "item_category_id")
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private ItemCategory itemCategory;

    @ManyToMany
    @JoinTable(name = "item_extra",
            joinColumns = {@JoinColumn(name = "item_id")},
            inverseJoinColumns = {@JoinColumn(name = "extra_id")}
    )
    private List<Extra> extras;
}
