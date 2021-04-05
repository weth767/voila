package br.com.voila.backend.voilabackend.repository;

import br.com.voila.backend.voilabackend.enums.OrderStatusEnum;
import br.com.voila.backend.voilabackend.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findAllByStatus(OrderStatusEnum statusEnum);

    List<Order> findAllByStatusAndDateTimeBetween(
            OrderStatusEnum status, @NotNull LocalDateTime dateTime,
            @NotNull LocalDateTime dateTime2);
}
