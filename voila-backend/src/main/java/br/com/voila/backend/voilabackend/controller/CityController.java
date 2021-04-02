package br.com.voila.backend.voilabackend.controller;

import br.com.voila.backend.voilabackend.dto.CityDTO;
import br.com.voila.backend.voilabackend.enums.StateEnum;
import br.com.voila.backend.voilabackend.mapper.ExtraMapper;
import br.com.voila.backend.voilabackend.service.CityService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/city")
@RequiredArgsConstructor
public class CityController {
    private final CityService cityService;

    @GetMapping("/{stateEnum}")
    public ResponseEntity<List<CityDTO>> findCityByState(@PathVariable StateEnum stateEnum) {
        return ResponseEntity.ok(cityService.findCityByState(stateEnum));
    }

}
