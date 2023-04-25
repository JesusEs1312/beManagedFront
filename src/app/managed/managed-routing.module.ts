import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasComponent } from './pages/compras/compras.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'compras',
        component: ComprasComponent
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
