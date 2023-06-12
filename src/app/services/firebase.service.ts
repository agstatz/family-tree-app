import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private individualsPath = '/individuals'; // Update this with your desired database path
  individualsCollection: AngularFirestoreCollection<any>;

  constructor(private firestore: AngularFirestore) {
    this.individualsCollection = this.firestore.collection<any>(this.individualsPath);
  }

  getIndividuals(): Observable<any[]> {
    return this.individualsCollection.valueChanges({ idField: 'key' });
  }

  addIndividual(individual: any): Promise<any> {
    return this.individualsCollection.add(individual);
  }

  updateIndividual(key: string, individual: any): Promise<void> {
    return this.individualsCollection.doc(key).update(individual);
  }

  deleteIndividual(key: string): Promise<void> {
    return this.individualsCollection.doc(key).delete();
  }
}
