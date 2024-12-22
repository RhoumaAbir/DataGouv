import { Component,OnInit } from '@angular/core';
import { Segment } from '../../model/segment';
import { SegmentService } from 'src/app/services/segment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

enum Operation {
  CONSULTATION = 'CONSULTATION',
  SUPPRESSION = 'SUPPRESSION',
  MODIFICATION = 'MODIFICATION',
  CREATION = 'CREATION',
}

@Component({
  selector: 'app-add-segment',
  templateUrl: './add-segment.component.html',
  styleUrls: ['./add-segment.component.css']
})
export class AddSegmentComponent {
 segmentForm!: FormGroup;
 typeOperationOptions: Operation[] = Object.values(Operation);

 constructor(private fb: FormBuilder, private segmentService: SegmentService, private router: Router) {}

 ngOnInit(): void {
  this.initForm();
 // this.fetchTypeOperationOptions();
}

 initForm(): void {
  this.segmentForm = this.fb.group({
    ordreSegment: [null, [Validators.required]],
    labelDonne: [null, [Validators.required]],
    nomSource: [null, [Validators.required]],
    matriculeUtilisateur: [null, [Validators.required]],
    operation: [null, [Validators.required]],
  });
}

onSubmit(): void {
  if (this.segmentForm.valid) {
    this.segmentService.addSegment(this.segmentForm.value).subscribe(() => {
      console.log('Segment added successfully');
      this.router.navigate(['/home_decideur/segment']);
    });
  }
}
  
goToHomePage() {
  // Navigate to the home page
  this.router.navigate(['/home_decideur/segment']);
}
}
