package com.example.cataloguedonnees.config;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.example.cataloguedonnees.dto.UtilisateurDto;
import com.example.cataloguedonnees.model.Role;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.Base64;
import java.util.Collections;
import java.util.Date;

@RequiredArgsConstructor
@Component
public class UserAuthProvider {

    @Value("${security.jwt.token.secret-key:secret-key}")
    private String secretKey; //code secret qu'on utilise pour coder et décoder le jeton

    @PostConstruct
    protected void init()
    {
        secretKey= Base64.getEncoder().encodeToString(secretKey.getBytes());
    }

    public String createToken(UtilisateurDto utilisateurDto) //cette méthode permet de créer le jeton
    {
        Date now=new Date();
        Date validity=new Date(now.getTime()+3_600_000);
        return JWT.create()
                .withIssuer(utilisateurDto.getIdentifiantUtilisateur())
                .withIssuedAt(now) //ajout de la date dans le jeton
                .withExpiresAt(validity)   //ajout de la date de validité du jeton
                .withClaim("nomUtilisateur",utilisateurDto.getNomUtilisateur())
                .withClaim("prenomUtilisateur",utilisateurDto.getPrenomUtilisateur())
                .withClaim("idUtilisateur",utilisateurDto.getIdUtilisateur())
                .withClaim("roleUtilisateur", utilisateurDto.getRoleUtilisateur().name())
                .withClaim("emailUtilisateur", utilisateurDto.getEmailUtilisateur())
                .sign(Algorithm.HMAC256(secretKey));
    }

    public Authentication validateToken(String token) //cette méthode permet de décodrer le jeton
    {
         Algorithm algorithm=Algorithm.HMAC256(secretKey);
        JWTVerifier verifier=JWT.require(algorithm).build();
        DecodedJWT decodedJWT=verifier.verify(token);
        // Créer un utilisateurDto avec les informations du jeton décodées
        UtilisateurDto utilisateurDto=new UtilisateurDto();
        utilisateurDto.setIdentifiantUtilisateur(decodedJWT.getIssuer());
        utilisateurDto.setNomUtilisateur(decodedJWT.getClaim("nomUtilisateur").asString());
        utilisateurDto.setPrenomUtilisateur(decodedJWT.getClaim("prenomUtilisateur").asString());
        utilisateurDto.setIdUtilisateur(decodedJWT.getClaim("idUtilisateur").asLong());

        String roleUtilisateurClaim = decodedJWT.getClaim("roleUtilisateur").asString(); // Obtenir la revendication "roleUtilisateur" du jeton JWT comme une chaîne de caractères

        utilisateurDto.setRoleUtilisateur(Role.valueOf(roleUtilisateurClaim) ); // convertir la chaine de caractère du role en un type  Role et la suaveguarder dans utilisateurDto
        utilisateurDto.setEmailUtilisateur(decodedJWT.getClaim("emailUtilisateur").asString());

        return new UsernamePasswordAuthenticationToken(
                utilisateurDto,
                null,
                Collections.singletonList(new SimpleGrantedAuthority("ROLE_"+Role.valueOf(roleUtilisateurClaim) ))
                );

    }


}
