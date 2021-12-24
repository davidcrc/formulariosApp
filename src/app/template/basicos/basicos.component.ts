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

  // Establecer valores por defecto al form
  // utilizando el ngModel
  initForm = {
    producto: 'Grafica moderna',
    precio: 10,
    existencias: 5,
  };

  constructor() {}

  // guardar(miFormulario: NgForm) {
  guardar() {
    console.log(this.miFormulario.value);

    // Resetear forms
    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0,
    });
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
