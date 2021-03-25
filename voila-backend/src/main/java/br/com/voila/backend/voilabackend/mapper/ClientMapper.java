package br.com.voila.backend.voilabackend.mapper;

import br.com.voila.backend.voilabackend.dto.ClientDTO;
import br.com.voila.backend.voilabackend.model.Client;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring", uses = PersonNaturalMapper.class)
@Component
public interface ClientMapper {
    Client toEntity(ClientDTO clientDTO);
    ClientDTO toDTO(Client client);
}
