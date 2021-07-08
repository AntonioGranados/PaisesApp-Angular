import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/paises-interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
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

      .small-flag {
        width: 50px;
        height: 50px;
      }
    `
  ]
})
export class PorPaisComponent {
  paisABuscar: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];

  constructor(private paisService: PaisService) { }

  buscarPais(paisABuscar: string) {
    this.hayError = false;

    //el pais a buscar será igual al pais que recibo como argumento que viene del input
    this.paisABuscar = paisABuscar;
    
    this.paisService.buscarPais(this.paisABuscar).subscribe(respuesta => {
      console.log(respuesta);
      this.paises = respuesta;
    }, (error) => {
      this.hayError = true;
      this.paises = [];
    });
  }

  sugerencias(paisABuscar: string) {
    this.hayError = false;
  }
}
