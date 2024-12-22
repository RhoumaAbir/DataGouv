import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthentificationService } from '../services/services_utilisateur/authentification.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private service_authentification: AuthentificationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.service_authentification.getToken();

        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }

        return next.handle(request);
    }
}
// Rôle de cette classe : permet d'intercepter les requêtes HTTP sortantes pour inclure le token JWT dans l'en-tête Authorization de la requête.