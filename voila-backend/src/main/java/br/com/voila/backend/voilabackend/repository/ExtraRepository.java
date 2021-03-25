package br.com.voila.backend.voilabackend.repository;

import br.com.voila.backend.voilabackend.model.Extra;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExtraRepository extends JpaRepository<Extra, Long> {
}
