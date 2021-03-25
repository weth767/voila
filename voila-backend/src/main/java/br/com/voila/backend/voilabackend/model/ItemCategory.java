package br.com.voila.backend.voilabackend.model;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "item_category")
@Getter
@Setter
public class ItemCategory {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "name")
    @Size(max = 150)
    @NotNull
    private String name;

    @Column(name = "is_active")
    private Boolean isActive;

    @Column(name = "image")
    private byte[] image;
}
