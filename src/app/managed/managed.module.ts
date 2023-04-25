import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComprasComponent } from './pages/compras/compras.component';
import { ManagedRoutingModule } from './managed-routing.module';
import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [
    ComprasComponent
  ],
  imports: [
    CommonModule,
    ManagedRoutingModule,
    MaterialModule
  ]
})
export class ManagedModule { }
