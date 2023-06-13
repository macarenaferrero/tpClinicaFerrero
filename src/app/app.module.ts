import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigInComponent } from './auth/sig-in/sig-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from "@angular/fire/compat";
import { ToastrModule } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './pages/home/home-routing.module';
import { SharedModule } from './Shared/shared.module';
import { AdministradorRoutingModule } from './pages/administrador/administrador-routing.module';
import { HomeModule } from './pages/home/home.module';
import { AdministradorModule } from './pages/administrador/administrador.module';
import { TurnoDetalleComponent } from './Components/turno-detalle/turno-detalle.component';
import { EncuestaComponent } from './Components/encuesta/encuesta.component';

@NgModule({
  declarations: [
    AppComponent,
    SigInComponent,

  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    ToastrModule.forRoot(),
    HttpClientModule,
    HomeRoutingModule,
    AdministradorRoutingModule,
    HomeModule,
    AdministradorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
