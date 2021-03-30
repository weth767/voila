package br.com.voila.backend.voilabackend.service;

import br.com.voila.backend.voilabackend.dto.AccountDTO;
import br.com.voila.backend.voilabackend.dto.RestaurantDTO;
import br.com.voila.backend.voilabackend.enums.AccountTypeEnum;
import br.com.voila.backend.voilabackend.exception.ParametrizedMessageException;
import br.com.voila.backend.voilabackend.mapper.AccountMapper;
import br.com.voila.backend.voilabackend.mapper.RestaurantMapper;
import br.com.voila.backend.voilabackend.model.Account;
import br.com.voila.backend.voilabackend.model.Restaurant;
import br.com.voila.backend.voilabackend.repository.AccountRepository;
import br.com.voila.backend.voilabackend.repository.RestaurantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class RestaurantService {

    private final RestaurantMapper restaurantMapper;
    private final RestaurantRepository restaurantRepository;
    private final AccountRepository accountRepository;
    private final AccountMapper accountMapper;

    @Transactional(readOnly=true)
    public Page<RestaurantDTO> findAll(Pageable pageable) {
        return restaurantRepository.findAll(pageable).map(restaurantMapper::toDTO);
    }

    @Transactional(readOnly=true)
    public List<RestaurantDTO> findAll() {
        return restaurantRepository.findAll()
                .stream()
                .map(restaurantMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly=true)
    public RestaurantDTO findById(Long id) {
        Restaurant restaurant = restaurantRepository.findById(id).orElseThrow(() -> new ParametrizedMessageException("Restaurante não econtrado"));
        return restaurantMapper.toDTO(restaurant);
    }

    public void update(Long id, Restaurant restaurantUpdate) {
        Restaurant restaurant = restaurantRepository.findById(id).orElseThrow(() -> new ParametrizedMessageException("Restaurante não econtrado"));
        restaurantUpdate.setId(restaurant.getId());
        restaurantMapper.toDTO(restaurantRepository.save(restaurantUpdate));
    }

    public RestaurantDTO save(Restaurant restaurant) {
        restaurant.getPersonLegal().getPerson().getAccount().setAccountType(AccountTypeEnum.RESTAURANT);
        return restaurantMapper.toDTO(restaurantRepository.save(restaurant));
    }

    public void delete(Long id) {
        Restaurant restaurant = restaurantRepository.findById(id).orElseThrow(() -> new ParametrizedMessageException("Restaurante não econtrado"));
        restaurantRepository.delete(restaurant);
    }

    public AccountDTO login(String email, String password) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        Account account = accountRepository
                .findByEmailAndPasswordAndAccountType(email, passwordEncoder.encode(password),
                        AccountTypeEnum.RESTAURANT)
                .orElseThrow(() -> new ParametrizedMessageException("Email ou senha incorretos"));
        AccountDTO accountDTO = accountMapper.toDTO(account);
        accountDTO.setPassword(null);
        return accountDTO;
    }
}
