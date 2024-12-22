package com.example.cataloguedonnees.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

@RequiredArgsConstructor
@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig {

    private final UserAuthProvider userAuthProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception
    {
           http.csrf(AbstractHttpConfigurer::disable)

             .addFilterBefore(new JwtAuthFilter(userAuthProvider), BasicAuthenticationFilter.class)
               .sessionManagement( costumizer -> costumizer.sessionCreationPolicy(SessionCreationPolicy.STATELESS)) // càd on est dans une application stateless donc pas besoin d'enregister la ssesion
                .authorizeHttpRequests( (requests) ->
                        requests.requestMatchers(HttpMethod.POST,"/LoginController/login").permitAll()
                                 .requestMatchers(HttpMethod.POST,"/LoginController/login_front_office").permitAll()
                                .requestMatchers(HttpMethod.POST,"/Utilisateur/ajouter_auditeur_avec_organisation").permitAll()
                                .requestMatchers(HttpMethod.GET,"/Utilisateur/verifier_email").permitAll()
                              .anyRequest().authenticated()
                               // .anyRequest().permitAll()

              );
return http.build();




    }





}
