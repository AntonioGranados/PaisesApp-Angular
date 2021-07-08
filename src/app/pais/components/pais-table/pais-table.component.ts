import { Component, Input } from '@angular/core';
import { Pais } from '../../interfaces/paises-interface';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
  styleUrls: ['./pais-table.component.css']
})
export class PaisTableComponent {
  @Input() paises: Pais[] = [];

  constructor() { }

}
