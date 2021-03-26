package br.com.voila.backend.voilabackend.service;

import br.com.voila.backend.voilabackend.dto.ItemCategoryDTO;
import br.com.voila.backend.voilabackend.exception.ParametrizedMessageException;
import br.com.voila.backend.voilabackend.mapper.ItemCategoryMapper;
import br.com.voila.backend.voilabackend.model.ItemCategory;
import br.com.voila.backend.voilabackend.repository.ItemCategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class ItemCategoryService {

    private final ItemCategoryMapper itemCategoryMapper;
    private final ItemCategoryRepository itemCategoryRepository;

    public Page<ItemCategoryDTO> findAll(Pageable pageable) {
        return itemCategoryRepository.findAll(pageable).map(itemCategoryMapper::toDTO);
    }

    public List<ItemCategoryDTO> findAll() {
        return itemCategoryRepository.findAll()
                .stream()
                .map(itemCategoryMapper::toDTO)
                .collect(Collectors.toList());
    }


    public ItemCategoryDTO findById(Long id) {
        ItemCategory item = itemCategoryRepository.findById(id).orElseThrow(() -> new ParametrizedMessageException("Catergoria não econtrada"));
        return itemCategoryMapper.toDTO(item);
    }

    public void update(Long id,ItemCategory itemCategory) {
        ItemCategory item = itemCategoryRepository.findById(id).orElseThrow(() -> new ParametrizedMessageException("Catergoria não econtrada"));
        itemCategory.setId(item.getId());
        itemCategoryMapper.toDTO(itemCategoryRepository.save(itemCategory));
    }

    public ItemCategoryDTO save(ItemCategory itemCategory) {
        return itemCategoryMapper.toDTO(itemCategoryRepository.save(itemCategory));
    }

    public void delete(Long id) {
        ItemCategory itemCategory = itemCategoryRepository.findById(id).orElseThrow(() -> new ParametrizedMessageException("Catergoria não econtrada"));
        itemCategoryRepository.delete(itemCategory);
    }
}
