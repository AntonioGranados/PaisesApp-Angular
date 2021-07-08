import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pais } from '../interfaces/paises-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  //Url de restcountries
  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  get httpParams() {
    return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population');
  }

  constructor(private http: HttpClient) { }

  buscarPais(paisABuscar: string): Observable<Pais[]> {
    const url = `${this.apiUrl}/name/${paisABuscar}`;

    return this.http.get<Pais[]>(url, {params: this.httpParams});
  }

  buscarCapital(capitalABuscar: string): Observable<Pais[]> {
    const url = `${this.apiUrl}/capital/${capitalABuscar}`;

    return this.http.get<Pais[]>(url, {params: this.httpParams});
  }
  
  getPaisPorId(id: string): Observable<Pais> {
    const url = `${this.apiUrl}/alpha/${id}`;

    return this.http.get<Pais>(url);
  }

  buscarRegion(region: string): Observable<Pais[]> {
    const url = `${this.apiUrl}/region/${region}`;

    return this.http.get<Pais[]>(url, {params: this.httpParams});
  }
}

