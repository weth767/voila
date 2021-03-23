package br.com.voila.backend.voilabackend.model;

import br.com.voila.backend.voilabackend.enums.GenderEnum;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "person_natural")
public class PersonNatural {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "cpf")
    private String cpf;

    @Column(name = "birthday")
    private LocalDate birthday;

    @Column(name = "gender")
    @Enumerated(EnumType.ORDINAL)
    private GenderEnum gender;

    @JoinColumn(name = "person_id")
    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Person person;
}
