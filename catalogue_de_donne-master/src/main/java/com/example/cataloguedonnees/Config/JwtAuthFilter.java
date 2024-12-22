package com.example.cataloguedonnees.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
//Rôle de cette classe : filter les requête Http + valider le jeton
@RequiredArgsConstructor
public class JwtAuthFilter extends OncePerRequestFilter {

    private final UserAuthProvider userAuthProvider;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
    // ***** Tester si il existe une entête d'autorisation
        String header=request.getHeader(HttpHeaders.AUTHORIZATION);
if(header != null)
{
    String[] authElements= header.split(" "); //On a réccupéré la première partie du jeton dont la séparation entre cette partie et la partie suivante est un espace " "
    if(authElements.length == 2 && "Bearer".equals(authElements[0]))
    {
        try {
            SecurityContextHolder.getContext().setAuthentication(userAuthProvider.validateToken(authElements[1])); // en effet le jeton est stoké dans la deuxième partie
        }catch (RuntimeException e)
        {
            SecurityContextHolder.clearContext();
            throw e;
        }
    }
}
        // ***** FIN Tester si il existe une entête d'autorisation
        filterChain.doFilter(request,response);

    }
}
