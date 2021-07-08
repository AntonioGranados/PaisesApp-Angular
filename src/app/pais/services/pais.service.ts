import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pais } from '../interfaces/paises-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  //Url de restcountries
  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  buscarPais(paisABuscar: string): Observable<Pais[]> {
    const url = `${this.apiUrl}/name/${paisABuscar}`;

    return this.http.get<Pais[]>(url);
  }

  buscarCapital(capitalABuscar: string): Observable<Pais[]> {
    const url = `${this.apiUrl}/capital/${capitalABuscar}`;

    return this.http.get<Pais[]>(url);
  }
  
  getPaisPorId(id: string): Observable<Pais> {
    const url = `${this.apiUrl}/alpha/${id}`;

    return this.http.get<Pais>(url);

  }
}

