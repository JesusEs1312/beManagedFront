import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Compra } from '../../interfaces/page.interface';
import { ManagedService } from '../../services/managed.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  displayedColumns: string[] = ['id', 'producto', 'tipo_producto', 'precio', 'cantidad', 'tipo_compra', 'forma_pago'];
  dataSource!: MatTableDataSource<Compra>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  
  constructor(private managedService: ManagedService) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.managedService.getCompras().subscribe(
      {
        next: (compras) => {
          this.dataSource = new MatTableDataSource(compras);
        }
      }
    );
  }
}
