package br.com.voila.backend.voilabackend.controller;

import br.com.voila.backend.voilabackend.dto.FinanceDTO;
import br.com.voila.backend.voilabackend.service.FinancesService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/finances")
@RequiredArgsConstructor
@CrossOrigin
public class FinancesController {
    private final FinancesService financesService;

    @GetMapping
    public List<FinanceDTO> findByDates(@RequestParam("minDate") String minDate,
                                        @RequestParam("maxDate") String maxDate) {
        return financesService.findByDate(minDate, maxDate);
    }
}
