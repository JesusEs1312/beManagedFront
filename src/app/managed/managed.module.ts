import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComprasComponent } from './pages/compras/compras.component';
import { ManagedRoutingModule } from './managed-routing.module';
import { MaterialModule } from '../material/material.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VistaCompletaComponent } from './pages/vista-completa/vista-completa.component'; 




@NgModule({
  declarations: [
    ComprasComponent,
    AgregarComponent,
    VistaCompletaComponent
  ],
  imports: [
    CommonModule,
    ManagedRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ManagedModule { }
