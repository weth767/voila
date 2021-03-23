package br.com.voila.backend.voilabackend.repository;

import br.com.voila.backend.voilabackend.model.PersonNatural;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonNaturalRepository extends JpaRepository<PersonNatural, Long> {
}
