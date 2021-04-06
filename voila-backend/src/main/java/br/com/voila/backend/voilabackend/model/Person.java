package br.com.voila.backend.voilabackend.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.CascadeType;
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
@Table(name = "person")
public class Person {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "phone")
    private String phone;

    @Column(name = "image")
    private byte[] image;

    @JoinColumn(name = "account_id")
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Account account;

    @OneToOne(mappedBy = "person",cascade = CascadeType.ALL)
    private Address address;

    @OneToOne(mappedBy = "person",cascade = CascadeType.ALL)
    private PersonLegal personLegal;

    @OneToOne(mappedBy = "person",cascade = CascadeType.ALL)
    private PersonNatural personNatural;
}
