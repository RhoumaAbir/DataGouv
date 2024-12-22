import { Component } from '@angular/core';
import { Risque } from '../core/models/controle';
import { ActivatedRoute, Router } from '@angular/router';
import { DecideurService } from '../decideur.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { controle } from '../core/models/controle';

@Component({
  selector: 'app-modifierdecideur',
  templateUrl: './modifierdecideur.component.html',
  styleUrls: ['./modifierdecideur.component.css']
})
export class ModifierdecideurComponent {
  contoledecideur: controle[] = [];
  referenceControle!: string;
  cont: any;
  risques = Object.values(Risque);
  myForm: FormGroup;
  decideur: any = { vulnerabilite: '', rapportScanControle: '', dateHeureControle: new Date() };

  constructor(
    private decideurService: DecideurService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.myForm = this.formBuilder.group({
      vulnerabilite: ['', Validators.required],
      rapportScanControle: ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.pattern('[A-Za-z]+')])],
    });
  }

  ngOnInit(): void {
    this.referenceControle = this.route.snapshot.params['referenceControle'];
    this.decideurService.getdecideurById(this.referenceControle).subscribe(
      (data) => {
        this.cont = data;
        console.log('', this.cont);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    console.log('id', this.referenceControle);
    console.log('valeur forrm', this.myForm.value);
    console.log('decideur', this.decideur);
    this.decideurService.updateDecideur(this.referenceControle, this.myForm.value).subscribe(
      () => {
        this.goauditlist();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  goauditlist() {
    this.router.navigate(['/home_decideur']);
  }

  update(id: number) {
    this.router.navigate(['/home_decideur/gerer_mes_scans']);
  }
}