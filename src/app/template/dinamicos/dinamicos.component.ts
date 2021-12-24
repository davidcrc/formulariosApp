import { Component, OnInit } from '@angular/core';

interface Favorito {
  id: number;
  nombre: string;
}

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent {
  persona: Persona = {
    nombre: 'Persona',
    favoritos: [
      {
        id: 1,
        nombre: 'Favorito 1',
      },
      {
        id: 2,
        nombre: 'Favorito 2',
      },
    ],
  };
  guardar() {
    console.log('guardar');
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }
}
