import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  // nombre => sera utilizacon con 'formControlName' en el html
  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('Un objeto cualquiera'),
  //   precio: new FormControl(0),
  //   existencias: new FormControl(5),
  // });

  // Ora manera de crear lo anterior
  // fb.group({
  // nombreDelObjetoenElForm : [ 'valor por defecto', [vlidador sincrono], [validador asincrono] ]
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(0)]],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Valores por defecto mejor usar el reset
    // ya que el setValue requiere setear todos los campos
    this.miFormulario.reset({
      nombre: 'Alguna cosa',
      // precio: 0,
      existencias: 0,
    });
  }

  campoValido(campo: string) {
    return (
      this.miFormulario.controls[campo]?.errors &&
      this.miFormulario.controls[campo]?.touched
    );
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);

    this.miFormulario.reset();
  }
}
