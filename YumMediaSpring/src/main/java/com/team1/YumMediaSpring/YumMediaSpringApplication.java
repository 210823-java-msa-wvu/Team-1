package com.team1.YumMediaSpring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan("com.team1") // alerts spring to look for components / stereotypes
@EntityScan("com.team1.models")
@EnableJpaRepositories("com.team1.repositories")
public class YumMediaSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(YumMediaSpringApplication.class, args);
	}

}
