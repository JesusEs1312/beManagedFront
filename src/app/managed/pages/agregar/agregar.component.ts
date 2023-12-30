import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ManagedService } from '../../services/managed.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Compra, TipoCompra, FormasPago, TipoProducto } from '../../interfaces/page.interface';

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

  public compraForm = new FormGroup({
    id:             new FormControl<number>(0),
    nombreProducto: new FormControl<string>(''),
    precio:         new FormControl<string>(''),
    tipoProducto:   new FormControl<TipoProducto>(TipoProducto.ConvivenciaCB),
    cantidad:       new FormControl<string>(''),
    tipo:           new FormControl<TipoCompra>(TipoCompra.Ocasional),
    metodo:         new FormControl<FormasPago>(FormasPago.Efectivo),
    lugar:          new FormControl<string>(''), 
    repetido:       new FormControl<string>('No'),
    motivo:         new FormControl<string>(''),
    comentario:     new FormControl<string>(''),
    imagen:         new FormControl<string>('')
  });

  public compra: Compra = {
    nombreProducto: '',
    precio: 0,
    tipoProducto: '',
    cantidad: 0,
    tipo: TipoCompra.Habitual,
    metodo: FormasPago.BbvaAzul,
    lugar: '',
    repetido: 'No',
    motivo: '',
    comentario: '',
    imagen: ''
  }
  
  constructor(private managedService: ManagedService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {}

  ngSubmit(): void {
    console.log({
      formIsValid: this.compraForm.valid,
      value: this.compraForm.value
    });
  }

}
