package br.com.voila.backend.voilabackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan("br.com.voila.backend.voilabackend.model")
@EnableJpaRepositories("br.com.voila.backend.voilabackend.*")
public class VoilaBackendApplication {
	public static void main(String[] args) {
		SpringApplication.run(VoilaBackendApplication.class, args);
	}
}
