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

  public compraForm = new FormGroup({
    id:             new FormControl<string>(''),
    nombreProducto: new FormControl<string>(''),
    precio:         new FormControl<number>(0),
    tipoProducto:   new FormControl<TipoProducto>(TipoProducto.ConvivenciaI),
    cantidad:       new FormControl<number>(0),
    tipo:           new FormControl<TipoCompra>(TipoCompra.Ocasional),
    metodo:         new FormControl<FormasPago>(FormasPago.Efectivo),
    lugar:          new FormControl<string | null>(''), 
    repetido:       new FormControl<string>('No'),
    motivo:         new FormControl<string | null>(''),
    comentario:     new FormControl<string | null>(''),
    imagen:         new FormControl<string | null>('')
  });

  public TipoProductoArray = [
    {id: "ConvivenciaCB", desc: "Convivencia(consumo basico)"},
    {id: "ConvivenciaI", desc: "Convivencia(impulso)"},
    {id: "ConvivenciaU", desc: "Convivencia(urgencia)"},
    {id: "Comparacion", desc: "Comparacion"},
    {id: "Especialidad", desc: "Especialidad"},
    {id: "NoBuscado", desc: "No buscado"}
  ]

  public TipoCompra = [
    {id: "Habitual", desc: "Habitual"},
    {id: "Impulsiva", desc: "Impulsiva"},
    {id: "Ocasional", desc: "Ocasional"},
    {id: "Proximidad", desc: "Proximidad"},
    {id: "Descarte", desc: "Descarte"},
    {id: "Compleja", desc: "Compleja"}
  ]

  public FormasPago = [
    {id: "Efectivo", desc: "Efectivo"},
    {id: "bbvaAzulita", desc: "BBVA Azulita"},
    {id: "bbvaAzul", desc: "BBVA Azul"},
    {id: "Nu", desc: "NU"},
    {id: "RappiCard", desc: "Rappi Card"},
    {id: "DiDiCard", desc: "DiDi Card"},
    {id: "Stori", desc: "Stori"},
    {id: "HSBCCard", desc: "HSBC Card"}
  ]
  
  constructor(private managedService: ManagedService) { }

  get currentCompra(): Compra {
    const compra = this.compraForm.value as Compra;

    return compra;
  }

  ngOnInit(): void {}

  ngSubmit(): void {
    if(this.compraForm.invalid){ return }

    if(this.currentCompra.id){
      this.managedService.updateCompra(this.currentCompra)
        .subscribe(compra => {
          //TODO: Mostrar snackbar
        });

      return;
    }

    this.managedService.saveCompra(this.currentCompra)
      .subscribe(compra => {
        //TODO: mostrar snackbar y navegar a lista de compras
        console.log(compra);
      });
  }

}
