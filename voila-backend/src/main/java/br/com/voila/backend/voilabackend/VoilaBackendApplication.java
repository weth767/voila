package br.com.voila.backend.voilabackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class VoilaBackendApplication {
	public static void main(String[] args) {
		SpringApplication.run(VoilaBackendApplication.class, args);
	}
}
