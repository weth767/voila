package br.com.voila.backend.voilabackend.service;

import br.com.voila.backend.voilabackend.dto.CityDTO;
import br.com.voila.backend.voilabackend.enums.StateEnum;
import br.com.voila.backend.voilabackend.mapper.AccountMapper;
import br.com.voila.backend.voilabackend.mapper.CityMapper;
import br.com.voila.backend.voilabackend.repository.CityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class CityService {

    private final CityRepository cityRepository;
    private final CityMapper cityMapper;

    public List<CityDTO> findCityByState(StateEnum stateEnum){
        return cityRepository.findAllByState(stateEnum)
                .stream()
                .map(cityMapper::toDTO)
                .collect(Collectors.toList());
    }

}
