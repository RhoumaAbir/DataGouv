package com.example.cataloguedonnees;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;


@EnableScheduling
@SpringBootApplication
@EnableAspectJAutoProxy
@EnableWebMvc
public class CatalogueDeDonneesApplication {

	public static void main(String[] args) {
		SpringApplication.run(CatalogueDeDonneesApplication.class, args);
	}

}
