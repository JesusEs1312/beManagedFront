import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasComponent } from './pages/compras/compras.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { VistaCompletaComponent } from './pages/vista-completa/vista-completa.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'compras',
        component: ComprasComponent
      },
      {
        path: 'agregar',
        component: AgregarComponent
      },
      {
        path: 'completo/:id',
        component: VistaCompletaComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ManagedRoutingModule { }
