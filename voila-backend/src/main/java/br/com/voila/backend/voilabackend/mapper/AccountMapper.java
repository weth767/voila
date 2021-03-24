package br.com.voila.backend.voilabackend.mapper;

import br.com.voila.backend.voilabackend.dto.AccountDTO;
import br.com.voila.backend.voilabackend.model.Account;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring", uses = {})
@Component
public interface AccountMapper {
    Account toEntity(AccountDTO accountDTO);
    AccountDTO toDTO(Account account);
}
