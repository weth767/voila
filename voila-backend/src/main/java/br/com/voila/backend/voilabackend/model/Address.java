package br.com.voila.backend.voilabackend.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Getter
@Setter
@Entity
@Table(name = "address")
public class Address {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "person_id")
    private Person person;

    @Column(name = "street")
    private String street;

    @Column(name = "number")
    private String number;

    @Column(name = "neighborhood")
    private String neighborhood;

    @Column(name = "complement")
    private String complement;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "city_id")
    private City city;
}
