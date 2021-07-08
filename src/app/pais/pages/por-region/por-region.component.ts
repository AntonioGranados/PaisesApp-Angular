import { Component, OnInit } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/paises-interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `
  ]
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'oceania', 'europe', 'asia'];
  regionActiva: string = '';
  paises: Pais[] = [];

  constructor(private paisService: PaisService ) { }

  getClaseCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }
 
  activarRegion(region: string) {
    
    if(region === this.regionActiva) {
      return;
    }

    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarRegion(region).subscribe(paises => {
      console.log(paises);
      this.paises = paises;
    });
  }
}
