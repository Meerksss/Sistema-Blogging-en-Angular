import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IBlog } from '../../interfaces/iblog.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  postBlog: IBlog = {
    titulo: '',
    imagen: '',
    descripcion: '',
    fecha: '',
  };

  arrayPosts: IBlog[] = [];

  arrayNoticias: IBlog[] = [
    {
      titulo: 'El Lince Ibérico',
      imagen: 'img/Lince.jpg',
      descripcion:
        'El lince ibérico, uno de los felinos más amenazados del planeta, sigue recuperando terreno en la península gracias a los esfuerzos de conservación. Este majestuoso animal, reconocido por sus orejas puntiagudas y mirada penetrante, simboliza la lucha por preservar nuestra biodiversidad.',
      fecha: '2025-05-03',
    },
    {
      titulo: 'El mejor amigo del hombre, el perro',
      imagen: 'img/Perro.jpg',
      descripcion:
        'Desde hace miles de años, los perros han acompañado al ser humano como guardianes, pastores y compañeros fieles. Su capacidad para entendernos y generar vínculos emocionales los convierte en algo más que una mascota. ',
      fecha: '2025-06-15',
    },
  ];
  constructor() {
    this.arrayPosts = [...this.arrayNoticias];
  }

  crearPost() {
    const campos = this.postBlog;
    if (
      !campos.titulo.trim() ||
      !campos.imagen ||
      !campos.descripcion.trim() ||
      !campos.fecha.trim()
    ) {
      alert('Todos los campos del formulario son obligatorios.');
      return;
    }

    this.arrayPosts.push({ ...campos });
    this.postBlog = { titulo: '', imagen: '', descripcion: '', fecha: '' };
  }

  cargarImagen(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.postBlog.imagen = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
