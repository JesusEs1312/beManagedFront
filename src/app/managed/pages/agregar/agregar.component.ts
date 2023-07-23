import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  //Formas de pago
  formas: String[] = [
    'Efectivo',
    'BBVA Azulita',
    'BBVA Azul',
    'NU',
    'RAPPI CARD'
  ];

  //Tipos de compras
  compras: String[] = [
    'Habitual',
    'Impulsiva',
    'Ocasional',
    'Proximidad',
    'Descarte',
    'Compleja'
  ];

  productos: String[] = [
    'Convivencia(consumo basico)',
    'Convivencia(impulso)',
    'Convivencia(urgencia)',
    'Comparacion',
    'Especialidad',
    'No buscado'
  ];

  selectFormControl = new FormControl< String | null>(null, Validators.required);
  
  constructor() { }

  ngOnInit(): void {    
  }

}
