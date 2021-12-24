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
  nuevoJuego: string = '';

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

  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego,
    };

    this.persona.favoritos.push({ ...nuevoFavorito });
    this.nuevoJuego = '';
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }
}
