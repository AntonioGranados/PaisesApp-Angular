import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})

export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  paisABuscar: string = '';

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe(valor => {
      this.onDebounce.emit(valor);
    });
  }

  buscarPais() {
    this.onEnter.emit(this.paisABuscar);
  }

  teclaPresionada() {
    this.debouncer.next(this.paisABuscar);
  }
}
