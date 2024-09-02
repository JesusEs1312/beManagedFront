import { Component, OnInit } from '@angular/core';
import { Compra } from '../../interfaces/page.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagedService } from '../../services/managed.service';

@Component({
  selector: 'app-vista-completa',
  templateUrl: './vista-completa.component.html',
  styleUrls: ['./vista-completa.component.css']
})
export class VistaCompletaComponent implements OnInit {

  public id: string = '';
  public compra!: Compra;

  constructor(
    private rutaActiva: ActivatedRoute,
    private managedService: ManagedService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.rutaActiva.snapshot.params['id'];
    this.managedService.getCompraById(this.id).subscribe(
      (compra) => {
        this.compra = compra;
        console.log(this.compra)
      }
    )
  }

}
