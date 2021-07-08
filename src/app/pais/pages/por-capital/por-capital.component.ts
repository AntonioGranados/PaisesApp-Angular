import { Component } from '@angular/core';
import { Pais } from '../../interfaces/paises-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
    `
      img {
        width: 200px;
        height: 200px;
      }

      .busqueda {
        width: 350px;
        height: 350px;
      }
    `
  ]
})

export class PorCapitalComponent {
  capitalABuscar: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];

  constructor(private paisService: PaisService) { }

  buscarCapital(capital: string) {
    this.hayError = false;
    this.capitalABuscar = capital;

    this.paisService.buscarCapital(capital).subscribe(respuesta => {
      console.log(respuesta);
      this.paises = respuesta;
    }, (error) => {
      this.hayError = true;
      this.paises = [];
    });
  }
}
