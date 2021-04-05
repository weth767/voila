package br.com.voila.backend.voilabackend.service;

import br.com.voila.backend.voilabackend.dto.FinanceDTO;
import br.com.voila.backend.voilabackend.enums.OrderStatusEnum;
import br.com.voila.backend.voilabackend.mapper.OrderMapper;
import br.com.voila.backend.voilabackend.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class FinancesService {
    private final OrderMapper orderMapper;
    private final OrderRepository orderRepository;

    public List<FinanceDTO> findByDate(LocalDateTime minDate, LocalDateTime maxDate) {
        return orderRepository.findAllByStatusAndDateTimeBetween(OrderStatusEnum.DELIVERED,
                minDate, maxDate).stream().map(orderMapper::toFinance)
                .collect(Collectors.toList());
    }
}
