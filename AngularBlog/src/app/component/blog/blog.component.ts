import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IBlog } from '../../interfaces/iblog.interface';

@Component({
  selector: 'app-blog',
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  postBlog : IBlog = {
    titulo: '',
    imagen: '',
    descripcion: '',
    fecha: new Date()
  };

  arrayPosts: IBlog[] = [];

  arrayNoticias = [
    {
      titulo: 'El Lince Ibérico',
      imagen: 'imgs/lince.jpg',
      descripcion: 'El lince ibérico, uno de los felinos más amenazados del planeta, sigue recuperando terreno en la península gracias a los esfuerzos de conservación. Este majestuoso animal, reconocido por sus orejas puntiagudas y mirada penetrante, simboliza la lucha por preservar nuestra biodiversidad.',
      fecha: '2025-05-03'
    },
    {
      titulo: 'El mejor amigo del hombre, el perro',
      imagen: 'imgs/perro.jpg',
      descripcion: 'Desde hace miles de años, los perros han acompañado al ser humano como guardianes, pastores y compañeros fieles. Su capacidad para entendernos y generar vínculos emocionales los convierte en algo más que una mascota. ',
      fecha: '2025-06-15'
    }
  ]

  crearPost() {
    this.arrayPosts.push(this.postBlog);
    this.postBlog = {
      titulo: '',
      imagen: '',
      descripcion: '',
      fecha: new Date()
    };
  }
}
