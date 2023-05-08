import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
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
  constructor( private http: HttpClient) { }
}
