package br.com.voila.backend.voilabackend;

import br.com.voila.backend.voilabackend.config.properties.VoilaApiProperty;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
@EnableConfigurationProperties(VoilaApiProperty.class)
public class VoilaBackendApplication {
	public static void main(String[] args) {
		SpringApplication.run(VoilaBackendApplication.class, args);
	}
}
