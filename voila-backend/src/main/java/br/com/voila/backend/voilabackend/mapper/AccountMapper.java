package br.com.voila.backend.voilabackend.mapper;

import br.com.voila.backend.voilabackend.domain.AccountDomain;
import br.com.voila.backend.voilabackend.dto.consultation.AccountConsultationDTO;
import br.com.voila.backend.voilabackend.dto.inclusion.AccountInclusionDTO;
import br.com.voila.backend.voilabackend.model.Account;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring", uses = {})
@Component
public interface AccountMapper {
    AccountDomain toDomain(AccountInclusionDTO accountInclusionDTO);
    Account toEntity(AccountDomain accountDomain);
    AccountConsultationDTO toConsult(Account account);
}
