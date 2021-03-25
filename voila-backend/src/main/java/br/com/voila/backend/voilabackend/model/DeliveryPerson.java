package br.com.voila.backend.voilabackend.model;

import br.com.voila.backend.voilabackend.enums.VehicleTypeEnum;
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

@Getter
@Setter
@Entity
@Table(name = "deliveryperson")
public class DeliveryPerson {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "person_natural_id")
    private PersonNatural personNatural;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "person_legal_id")
    private PersonLegal personLegal;

    @Column(name = "vehicle_type")
    @Enumerated(EnumType.ORDINAL)
    private VehicleTypeEnum vehicleType;
}
