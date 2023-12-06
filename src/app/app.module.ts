import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';

import { provideAuth,getAuth } from '@angular/fire/auth';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { LoginComponent } from './pages/login/login.component';
import { LabsComponent } from './pages/labs/labs.component';
import { HeaderComponent } from './commons/header/header.component';


const config = {
  apiKey: "AIzaSyAfAdUZaOknlFKgWpBdoz67Fc4Ajsyn-lQ",
  authDomain: "apis-525d6.firebaseapp.com",
  databaseURL: "https://apis-525d6-default-rtdb.firebaseio.com",
  projectId: "apis-525d6",
  storageBucket: "apis-525d6.appspot.com",
  messagingSenderId: "911544832013",
  appId: "1:911544832013:web:5317f04f23eeebb0ca4544"
};

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    LabsComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(config)),
    provideAuth(() => getAuth()), 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{}