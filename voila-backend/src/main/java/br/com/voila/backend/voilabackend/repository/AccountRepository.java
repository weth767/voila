package br.com.voila.backend.voilabackend.repository;

import br.com.voila.backend.voilabackend.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AccountRepository extends JpaRepository<Account, String> {
    Optional<Account> findByEmailAndPassword(String email, String password);

    Optional<Account> findByEmail(String email);
}
