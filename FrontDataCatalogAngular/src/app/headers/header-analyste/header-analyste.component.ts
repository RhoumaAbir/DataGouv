import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/core/services/services_utilisateur/authentification.service';

@Component({
  selector: 'app-header-analyste',
  templateUrl: './header-analyste.component.html',
  styleUrls: ['./header-analyste.component.css']
})
export class HeaderAnalysteComponent {
  constructor(private service_authentification: AuthentificationService, private router: Router) { }

  logout() {
    this.service_authentification.logout();
    this.router.navigate(['/login']);
  }
}
