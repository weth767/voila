package br.com.voila.backend.voilabackend.service;

import br.com.voila.backend.voilabackend.dto.ExtraDTO;
import br.com.voila.backend.voilabackend.exception.ParametrizedMessageException;
import br.com.voila.backend.voilabackend.mapper.ExtraMapper;
import br.com.voila.backend.voilabackend.model.Extra;
import br.com.voila.backend.voilabackend.repository.ExtraRepository;
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
public class ExtraService {

    private final ExtraMapper extraMapper;
    private final ExtraRepository extraRepository;

    @Transactional(readOnly=true)
    public Page<ExtraDTO> findAll(Pageable pageable) {
        return extraRepository.findAll(pageable).map(extraMapper::toDTO);
    }

    @Transactional(readOnly=true)
    public List<ExtraDTO> findAll() {
        return extraRepository.findAll()
                .stream()
                .map(extraMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly=true)
    public ExtraDTO findById(Long id) {
        Extra extra = extraRepository.findById(id).orElseThrow(() -> new ParametrizedMessageException("Extra não econtrada"));
        return extraMapper.toDTO(extra);
    }

    public void update(Long id, Extra itemCategory) {
        Extra item = extraRepository.findById(id).orElseThrow(() -> new ParametrizedMessageException("Extra não econtrado"));
        itemCategory.setId(item.getId());
        extraMapper.toDTO(extraRepository.save(itemCategory));
    }

    public ExtraDTO save(Extra extra) {
        return extraMapper.toDTO(extraRepository.save(extra));
    }

    public void delete(Long id) {
        Extra extra = extraRepository.findById(id).orElseThrow(() -> new ParametrizedMessageException("Extra não econtrado"));
        extraRepository.delete(extra);
    }
}
