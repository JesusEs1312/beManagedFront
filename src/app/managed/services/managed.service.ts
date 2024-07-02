

import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, catchError, map, of } from 'rxjs';
import { Compra } from '../interfaces/page.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManagedService {

  public baseUrl: string = environment.baseUrl;

  public getCompras(): Observable<Compra[]>{
    return this.http.get<Compra[]>(`${this.baseUrl}/compras`);
  }

  public saveCompra(compra: Compra): Observable<Compra>{
    return this.http.post<Compra>(`${this.baseUrl}/compras`, compra);
  }

  public getCompraById(id: string): Observable<Compra>{
    return this.http.get<Compra>(`${this.baseUrl}/compras/${id}`);
  }

  public updateCompra(compra: Compra): Observable<Compra>{
    if(!compra.id) throw Error("El id es requerido");
    return this.http.patch<Compra>(`${this.baseUrl}/compras/${compra.id}`, compra); 
  }

  public deleteCompra(id: string): Observable<boolean>{
    return this.http.delete<boolean>(`${this.baseUrl}/compras/${id}`)
      .pipe(
        catchError(err => of(false)),
        map(err => true)
      );
  }

  constructor( private http: HttpClient) { }
}
