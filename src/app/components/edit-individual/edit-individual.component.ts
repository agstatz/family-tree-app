import { Component, Input } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-edit-individual',
  templateUrl: './edit-individual.component.html',
  styleUrls: ['./edit-individual.component.css']
})
export class EditIndividualComponent {
  @Input() individual: any;

  constructor(private firebaseService: FirebaseService) { }

  updateIndividual(): void {
    this.firebaseService.updateIndividual(this.individual.key, this.individual)
      .then(() => {
        // Update successful
      })
      .catch(error => {
        console.error('Error updating individual:', error);
      });
  }
}
