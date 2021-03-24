package br.com.voila.backend.voilabackend.security;

import br.com.voila.backend.voilabackend.model.Account;

import java.util.Collections;

public class UserSystem extends org.springframework.security.core.userdetails.User {

	private static final long serialVersionUID = 1L;

	private Account account;

	public UserSystem(Account account) {
		super(account.getEmail(), account.getPassword(), Collections.emptyList());
		this.account = account;
	}

	public Account getAccount() {
		return account;
	}

}
