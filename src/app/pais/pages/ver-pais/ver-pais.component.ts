import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/paises-interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  //Propiedad pais que por defecto es null para ello usamos !
  pais!: Pais;

  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {
    this.activatedRoute.params //tenemos acceso al observable donde están los parametros (id del pais)
                       .pipe(
                         switchMap((param) => this.paisService.getPaisPorId(param.id)),
                         tap(console.log) //imprimimos en consola lo que venga en switchmap
                        )
                       .subscribe(pais => this.pais = pais);
                        
    // this.activatedRoute.params.subscribe(({id}) => {
    //   console.log(id);
    //   this.paisService.getPaisPorId(id).subscribe(pais => {
    //     console.log(pais);
    //   });
    // });
  }
}
