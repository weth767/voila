package br.com.voila.backend.voilabackend.service;

import br.com.voila.backend.voilabackend.dto.FinanceDTO;
import br.com.voila.backend.voilabackend.enums.OrderStatusEnum;
import br.com.voila.backend.voilabackend.mapper.OrderMapper;
import br.com.voila.backend.voilabackend.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class FinancesService {
    private final OrderMapper orderMapper;
    private final OrderRepository orderRepository;

    public List<FinanceDTO> findByDate(String minDate, String maxDate) {
        DateTimeFormatter formatter =
                DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", Locale.ENGLISH);
        LocalDateTime minDateTime = LocalDateTime.parse(minDate, formatter);
        minDateTime = minDateTime.minusHours(3L);
        LocalDateTime maxDateTime = LocalDateTime.parse(maxDate, formatter);
        maxDateTime = maxDateTime.minusHours(3L);
        return orderRepository.findAllByStatusAndDateTimeBetween(OrderStatusEnum.DELIVERED,
                minDateTime, maxDateTime).stream().map(orderMapper::toFinance)
                .collect(Collectors.toList());
    }
}
