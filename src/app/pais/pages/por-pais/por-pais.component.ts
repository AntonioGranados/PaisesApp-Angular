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

      li {
        cursor: pointer;
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

  paisesSugeridos: Pais[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  buscarPais(paisABuscar: string) {
    this.mostrarSugerencias = false;
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

  sugerencias(termino: string) {
    this.hayError = false;
    this.paisABuscar = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais(termino).subscribe(paises => {
      this.paisesSugeridos = paises.splice(0,5);
    }, (error) => {
      this.paisesSugeridos = [];
    });
  }

  buscarSugerido(termino: string) {
    this.buscarPais(termino);
  }
}
