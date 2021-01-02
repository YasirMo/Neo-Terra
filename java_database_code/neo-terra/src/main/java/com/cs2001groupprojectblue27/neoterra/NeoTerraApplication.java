package com.cs2001groupprojectblue27.neoterra;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages = "com.cs2001groupprojectblue27.neoterra.repository")
@SpringBootApplication
public class NeoTerraApplication {

	public static void main(String[] args) {
		SpringApplication.run(NeoTerraApplication.class, args);
	}

}
