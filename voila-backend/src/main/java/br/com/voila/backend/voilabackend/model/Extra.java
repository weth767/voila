package br.com.voila.backend.voilabackend.model;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

@Entity
@Table(name = "extra")
@Getter
@Setter
public class Extra {

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
}
