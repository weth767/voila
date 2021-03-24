package br.com.voila.backend.voilabackend.repository;

import br.com.voila.backend.voilabackend.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends JpaRepository<Item, String> {
}
