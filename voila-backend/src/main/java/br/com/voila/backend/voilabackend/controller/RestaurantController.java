package br.com.voila.backend.voilabackend.controller;

import br.com.voila.backend.voilabackend.dto.AccountDTO;
import br.com.voila.backend.voilabackend.dto.RestaurantDTO;
import br.com.voila.backend.voilabackend.mapper.RestaurantMapper;
import br.com.voila.backend.voilabackend.service.RestaurantService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.security.NoSuchAlgorithmException;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/restaurant")
@RequiredArgsConstructor
public class RestaurantController {

    private static final String URL = "/restaurant";
    private final RestaurantService restaurantService;
    private final RestaurantMapper restaurantMapper;

    @PostMapping
    public ResponseEntity<RestaurantDTO> save(
            @RequestBody RestaurantDTO restaurantDTO) throws NoSuchAlgorithmException {
        RestaurantDTO restaurant = restaurantService.save(restaurantMapper.toEntity(restaurantDTO));
        return ResponseEntity.created(URI.create(URL + "/" + restaurant.getId()))
                .body(restaurant);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> update(@PathVariable Long id, @RequestBody RestaurantDTO restaurantDTO) {
        restaurantService.update(id,restaurantMapper.toEntity(restaurantDTO));
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        restaurantService.delete(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/page")
    public ResponseEntity<Page<RestaurantDTO>> findAll(Pageable pageable) {
        return ResponseEntity.ok(restaurantService.findAll(pageable));
    }

    @GetMapping
    public ResponseEntity<List<RestaurantDTO>> findAll() {
        return ResponseEntity.ok(restaurantService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<RestaurantDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(restaurantService.findById(id));
    }

    @GetMapping("/login")
    public ResponseEntity<AccountDTO> login(@RequestParam("email") String email,
                                            @RequestParam("password") String password) throws NoSuchAlgorithmException {
        return ResponseEntity.ok(restaurantService.login(email, password));
    }
}
