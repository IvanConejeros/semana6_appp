import { Component } from '@angular/core';

@Component({
  selector: 'app-consejos',
  templateUrl: './consejos.page.html',
  styleUrls: ['./consejos.page.scss'],
})
export class ConsejosPage {
  // Propiedad definida como 'consejos' en minúsculas
  consejos = [
    {
      nombre: 'Lavado',
      descripcion: 'Revisa las instrucciones de cuidado en la etiqueta para saber cómo lavar, secar y planchar correctamente cada prenda.',
      imagen: '/assets/img/consejos/consejo1.jpg',
    },
    {
      nombre: 'Secado',
      descripcion: 'Evita el secado directo al sol: Los rayos UV pueden desvanecer los colores y debilitar las telas.',
      imagen: '/assets/img/consejos/consejo2.jpg',
    },
    {
      nombre: 'Productos naturales',
      descripcion: '1. Vinagre blanco: Úsalo como suavizante natural. 2. Bicarbonato de sodio: Ayuda a eliminar olores y manchas. 3. Bolsas de lavanda',
      imagen: '/assets/img/consejos/consejo3.jpg',
    },
    // Agregar más consejos aquí
  ];
}

