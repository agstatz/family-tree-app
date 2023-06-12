import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-individual-list',
  templateUrl: './individual-list.component.html',
  styleUrls: ['./individual-list.component.css']
})
export class IndividualListComponent implements OnInit {
  individuals$!: Observable<any[]>;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.individuals$ = this.firebaseService.getIndividuals();
  }

  deleteIndividual(key: string): void {
    this.firebaseService.deleteIndividual(key);
  }
}
