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
@Table(name = "person_legal")
public class PersonLegal {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "cnpj")
    private String cnpj;

    @JoinColumn(name = "person_id")
    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Person person;
}
