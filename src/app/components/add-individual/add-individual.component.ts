import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-add-individual',
  templateUrl: './add-individual.component.html',
  styleUrls: ['./add-individual.component.css'],
})
export class AddIndividualComponent {
  individual: any = {};

  constructor(private firebaseService: FirebaseService) { }

  addIndividual(): void {
    if (!this.individual.firstName || !this.individual.lastName) {
      //first name or last name blank
      return;
    }

    this.firebaseService.addIndividual(this.individual)
      .then(() => {
        // Reset the form
        this.individual = {};
      })
      .catch(error => {
        console.error('Error adding individual:', error);
      });
  }
}
