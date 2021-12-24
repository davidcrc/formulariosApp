import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  @ViewChild('miFormulario') miFormulario!: NgForm;
  precioMinimo: number = 0;

  constructor() {}

  // guardar(miFormulario: NgForm) {
  guardar() {
    console.log(this.miFormulario.value);
  }

  nombreValido() {
    return (
      this.miFormulario?.controls['producto']?.invalid &&
      this.miFormulario?.controls['producto']?.touched
    );
  }

  precioValido() {
    return (
      this.miFormulario?.controls['precio']?.invalid &&
      this.miFormulario?.controls['precio']?.touched
    );
  }
}
