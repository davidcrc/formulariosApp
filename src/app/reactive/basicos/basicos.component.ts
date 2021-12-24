import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  // nombre => sera utilizacon con 'formControlName' en el html
  miFormulario: FormGroup = new FormGroup({
    nombre: new FormControl('Un objeto cualquiera'),
  });
  constructor() {}
}
