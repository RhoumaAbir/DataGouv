import { Component } from '@angular/core';
import { UtilDonne } from '../../model/UtilDonne';
import { UserDataService } from 'src/app/services/user-data.service';
@Component({
  selector: 'app-data-user',
  templateUrl: './data-user.component.html',
  styleUrls: ['./data-user.component.css']
})
export class DataUserComponent {
  utilDonnes: UtilDonne[] = []; 
  constructor(private userDataService: UserDataService) { }
  ngOnInit(): void { 
    console.log('ngunit is calleed ')
    this.getAllUserData(); 
    } 
    getAllUserData():void {
    this.userDataService.getAllUserData().subscribe(
      (data) => {
        this.utilDonnes = data;
        console.log("liste des datauser list ", this.utilDonnes);
      },
      (error) => {
        console.error('Error fetching user data data:', error);
        // Handle error if needed
      }
    );
  }
  deleteDataUser(id: number | undefined): void {
    const isConfirmed = confirm('Are you sure you want to delete this datauser?');
    console.log(isConfirmed);
    if (isConfirmed && id !== undefined && id !== null) {
  
      this.userDataService.deleteDataUser(id).subscribe(() => {
        // Handle any additional logic after successful deletion
        console.log('DataUser deleted successfully');
  
        // Fetch updated datausers after deletion
        this.getAllUserData(); // Assuming you have a method like getAllDataUsers to fetch the updated list
      });
    }
  }
}
