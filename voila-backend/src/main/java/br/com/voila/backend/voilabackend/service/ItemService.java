package br.com.voila.backend.voilabackend.service;

import br.com.voila.backend.voilabackend.dto.ItemDTO;
import br.com.voila.backend.voilabackend.exception.ParametrizedMessageException;
import br.com.voila.backend.voilabackend.mapper.ItemMapper;
import br.com.voila.backend.voilabackend.model.Item;
import br.com.voila.backend.voilabackend.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class ItemService {

    private final ItemMapper itemMapper;
    private final ItemRepository itemRepository;

    @Transactional(readOnly=true)
    public Page<ItemDTO> findAll(Pageable pageable) {
        return itemRepository.findAll(pageable).map(itemMapper::toDTO);
    }

    @Transactional(readOnly=true)
    public List<ItemDTO> findAll() {
        return itemRepository.findAll()
                .stream()
                .map(itemMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly=true)
    public ItemDTO findById(Long id) {
        Item item = itemRepository.findById(id).orElseThrow(() -> new ParametrizedMessageException("Item não econtrado"));
        return itemMapper.toDTO(item);
    }

    public void update(Long id, Item itemCategory) {
        Item item = itemRepository.findById(id).orElseThrow(() -> new ParametrizedMessageException("Item não econtrado"));
        itemCategory.setId(item.getId());
        itemMapper.toDTO(itemRepository.save(itemCategory));
    }

    public ItemDTO save(Item item) {
        return itemMapper.toDTO(itemRepository.save(item));
    }

    public void delete(Long id) {
        Item item = itemRepository.findById(id).orElseThrow(() -> new ParametrizedMessageException("Item não econtrado"));
        itemRepository.delete(item);
    }
}
