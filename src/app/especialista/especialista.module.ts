import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MisTurnosEspecialistaComponent } from './mis-turnos-especialista/mis-turnos-especialista.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { EspecialistaRoutingModule } from './especialista-routing.module';
import { HomeModule } from '../pages/home/home.module';
import { MisHorariosComponent } from './mis-horarios/mis-horarios.component';
import { MiPerfilComponent } from '../Components/mi-perfil/mi-perfil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MisTurnosEspecialistaComponent,
    MisHorariosComponent,
    MiPerfilComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EspecialistaRoutingModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MisTurnosEspecialistaComponent,
    MisHorariosComponent,
    MiPerfilComponent
  ]
})
export class EspecialistaModule { }