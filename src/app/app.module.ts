import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat'
import { FormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { IndividualListComponent } from './components/individual-list/individual-list.component';
import { AddIndividualComponent } from './components/add-individual/add-individual.component';
import { EditIndividualComponent } from './components/edit-individual/edit-individual.component';
import { AppRoutingModule } from './app-routing.module';
import { FirebaseService } from './services/firebase.service';


@NgModule({
  declarations: [
    AppComponent,
    IndividualListComponent,
    AddIndividualComponent,
    EditIndividualComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
