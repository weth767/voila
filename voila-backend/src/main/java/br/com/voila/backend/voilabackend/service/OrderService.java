package br.com.voila.backend.voilabackend.service;

import br.com.voila.backend.voilabackend.dto.OrderDTO;
import br.com.voila.backend.voilabackend.dto.consult.OrderDataDTO;
import br.com.voila.backend.voilabackend.enums.OrderStatusEnum;
import br.com.voila.backend.voilabackend.exception.ParametrizedMessageException;
import br.com.voila.backend.voilabackend.mapper.OrderMapper;
import br.com.voila.backend.voilabackend.model.Order;
import br.com.voila.backend.voilabackend.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class OrderService {

    private final OrderMapper orderMapper;
    private final OrderRepository orderRepository;

    @Transactional(readOnly=true)
    public Page<OrderDTO> findAll(Pageable pageable) {
        return orderRepository.findAll(pageable).map(orderMapper::toDTO);
    }

    @Transactional(readOnly=true)
    public List<OrderDTO> findAll() {
        return orderRepository.findAll()
                .stream()
                .map(orderMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly=true)
    public OrderDataDTO findDataById(Long orderid) {
        return orderMapper.toDataDTO(orderRepository.getOne(orderid));
    }

    public List<OrderDTO> findAllByStatus(OrderStatusEnum status) {
        return orderRepository.findAllByStatus(status)
                .stream()
                .map(orderMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly=true)
    public OrderDTO findById(Long id) {
        Order order = orderRepository.findById(id).orElseThrow(() -> new ParametrizedMessageException("Pedido não econtrada"));
        return orderMapper.toDTO(order);
    }

    public void update(Long id, Order orderUpdate) {
        Order order = orderRepository.findById(id).orElseThrow(() -> new ParametrizedMessageException("Pedido não econtrado"));
        orderUpdate.setId(order.getId());
        orderMapper.toDTO(orderRepository.save(orderUpdate));
    }

    public OrderDTO save(Order order) {
        order.setStatus(OrderStatusEnum.AT_WAITING_FOR);
        return orderMapper.toDTO(orderRepository.save(order));
    }

    public void delete(Long id) {
        Order order = orderRepository.findById(id).orElseThrow(() -> new ParametrizedMessageException("Pedido não econtrado"));
        orderRepository.delete(order);
    }
}
