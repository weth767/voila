package br.com.voila.backend.voilabackend.controller;

import br.com.voila.backend.voilabackend.dto.ItemDTO;
import br.com.voila.backend.voilabackend.mapper.ItemMapper;
import br.com.voila.backend.voilabackend.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/item")
@RequiredArgsConstructor
@CrossOrigin
public class ItemController {
    private static final String URL = "/item";
    private final ItemService itemService;
    private final ItemMapper itemMapper;

    @PostMapping
    public ResponseEntity<ItemDTO> save(
            @RequestBody ItemDTO itemDTO) {
        ItemDTO item = itemService.save(itemMapper.toEntity(itemDTO));
        return ResponseEntity.created(URI.create(URL + "/" + item.getId()))
                .body(item);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> update(@PathVariable Long id, @RequestBody ItemDTO itemDTO) {
        itemService.update(id,itemMapper.toEntity(itemDTO));
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        itemService.delete(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/page")
    public ResponseEntity<Page<ItemDTO>> findAll(Pageable pageable) {
        return ResponseEntity.ok(itemService.findAll(pageable));
    }

    @GetMapping
    public ResponseEntity<List<ItemDTO>> findAll() {
        return ResponseEntity.ok(itemService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ItemDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(itemService.findById(id));
    }
}
