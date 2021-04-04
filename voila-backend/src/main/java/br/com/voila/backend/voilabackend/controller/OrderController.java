package br.com.voila.backend.voilabackend.controller;

import br.com.voila.backend.voilabackend.dto.OrderDTO;
import br.com.voila.backend.voilabackend.enums.OrderStatusEnum;
import br.com.voila.backend.voilabackend.enums.StateEnum;
import br.com.voila.backend.voilabackend.mapper.OrderMapper;
import br.com.voila.backend.voilabackend.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/order")
@RequiredArgsConstructor
@CrossOrigin
public class OrderController {
    private static final String URL = "/order";
    private final OrderService orderService;
    private final OrderMapper orderMapper;

    @PostMapping
    public ResponseEntity<OrderDTO> save(
            @RequestBody OrderDTO orderDTO) {
        OrderDTO order = orderService.save(orderMapper.toEntity(orderDTO));
        return ResponseEntity.created(URI.create(URL + "/" + order.getId()))
                .body(order);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> update(@PathVariable Long id, @RequestBody OrderDTO orderDTO) {
        orderService.update(id,orderMapper.toEntity(orderDTO));
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        orderService.delete(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/page")
    public ResponseEntity<Page<OrderDTO>> findAll(Pageable pageable) {
        return ResponseEntity.ok(orderService.findAll(pageable));
    }

    @GetMapping("/status/{statusEnum}")
    public ResponseEntity<List<OrderDTO>> findAllByStatus(@PathVariable OrderStatusEnum statusEnum) {
        return ResponseEntity.ok(orderService.findAllByStatus(statusEnum));
    }

    @GetMapping
    public ResponseEntity<List<OrderDTO>> findAll() {
        return ResponseEntity.ok(orderService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(orderService.findById(id));
    }

}
