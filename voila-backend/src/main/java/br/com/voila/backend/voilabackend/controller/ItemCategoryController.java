package br.com.voila.backend.voilabackend.controller;

import br.com.voila.backend.voilabackend.dto.ItemCategoryDTO;
import br.com.voila.backend.voilabackend.dto.ItemCategoryDTO;
import br.com.voila.backend.voilabackend.mapper.ItemCategoryMapper;
import br.com.voila.backend.voilabackend.service.ItemCategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/item-category")
@RequiredArgsConstructor
public class ItemCategoryController {
    private static final String URL = "/item-category";
    private final ItemCategoryService itemCategoryService;
    private final ItemCategoryMapper itemCategoryMapper;

    @PostMapping
    public ResponseEntity<ItemCategoryDTO> save(
            @RequestBody ItemCategoryDTO itemCategoryDTO) {
        ItemCategoryDTO itemCategory = itemCategoryService.save(itemCategoryMapper.toEntity(itemCategoryDTO));
        return ResponseEntity.created(URI.create(URL + "/" + itemCategory.getId()))
                .body(itemCategory);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> update(@PathVariable Long id, @RequestBody ItemCategoryDTO itemCategoryDTO) {
        itemCategoryService.update(id,itemCategoryMapper.toEntity(itemCategoryDTO));
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        itemCategoryService.delete(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/page")
    public ResponseEntity<Page<ItemCategoryDTO>> findAll(Pageable pageable) {
        return ResponseEntity.ok(itemCategoryService.findAll(pageable));
    }

    @GetMapping
    public ResponseEntity<List<ItemCategoryDTO>> findAll() {
        return ResponseEntity.ok(itemCategoryService.findAll());
    }

}
