package br.com.voila.backend.voilabackend.controller;

import br.com.voila.backend.voilabackend.dto.ExtraDTO;
import br.com.voila.backend.voilabackend.mapper.ExtraMapper;
import br.com.voila.backend.voilabackend.service.ExtraService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/extra")
@RequiredArgsConstructor
public class ExtraController {
    private static final String URL = "/extra";
    private final ExtraService extraService;
    private final ExtraMapper extraMapper;

    @PostMapping
    public ResponseEntity<ExtraDTO> save(
            @RequestBody ExtraDTO extraDTO) {
        ExtraDTO extra = extraService.save(extraMapper.toEntity(extraDTO));
        return ResponseEntity.created(URI.create(URL + "/" + extra.getId()))
                .body(extra);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> update(@PathVariable Long id, @RequestBody ExtraDTO extraDTO) {
        extraService.update(id,extraMapper.toEntity(extraDTO));
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        extraService.delete(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/page")
    public ResponseEntity<Page<ExtraDTO>> findAll(Pageable pageable) {
        return ResponseEntity.ok(extraService.findAll(pageable));
    }

    @GetMapping
    public ResponseEntity<List<ExtraDTO>> findAll() {
        return ResponseEntity.ok(extraService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ExtraDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(extraService.findById(id));
    }

}
