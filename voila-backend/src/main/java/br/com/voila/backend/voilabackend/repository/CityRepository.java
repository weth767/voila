package br.com.voila.backend.voilabackend.repository;

import br.com.voila.backend.voilabackend.enums.StateEnum;
import br.com.voila.backend.voilabackend.model.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CityRepository extends JpaRepository<City, Long> {

    List<City> findAllByState(StateEnum state);

}
