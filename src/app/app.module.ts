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
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    IndividualListComponent,
    AddIndividualComponent,
    EditIndividualComponent
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
