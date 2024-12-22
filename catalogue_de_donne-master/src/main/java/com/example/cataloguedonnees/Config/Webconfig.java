package com.example.cataloguedonnees.config;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.Arrays;

@Configuration
@EnableWebMvc
public class Webconfig{

    @Bean
    public FilterRegistrationBean crosFilter()
    {
        UrlBasedCorsConfigurationSource source=new UrlBasedCorsConfigurationSource();
        CorsConfiguration config =new CorsConfiguration();
        config.setAllowCredentials(true);
       config.addAllowedOrigin("http://localhost:4200");
        config.addAllowedOrigin("http://localhost:61033");
       config.setAllowedHeaders(Arrays.asList(
               HttpHeaders.AUTHORIZATION,
               HttpHeaders.CONTENT_TYPE,
               HttpHeaders.ACCEPT
       )); //peut être que je vais remplacer par "*"
       config.setAllowedMethods(Arrays.asList(
               HttpMethod.GET.name(),
               HttpMethod.POST.name(),
               HttpMethod.PUT.name(),
               HttpMethod.DELETE.name()

       ));
      config.setMaxAge(3600L); //la durrée acceptée
    source.registerCorsConfiguration("/**",config); //appliquer la configuration config pour toutes les routes
    FilterRegistrationBean bean=new FilterRegistrationBean(new CorsFilter(source));
    bean.setOrder(-102);
    return bean;
    }


}
