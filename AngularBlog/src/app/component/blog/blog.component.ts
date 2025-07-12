import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IBlog } from '../../interfaces/iblog.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
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

  arrayNoticias = [
    {
      titulo: 'El Lince Ibérico',
      imagen: 'imgs/lince.jpg',
      descripcion:
        'El lince ibérico, uno de los felinos más amenazados del planeta, sigue recuperando terreno en la península gracias a los esfuerzos de conservación. Este majestuoso animal, reconocido por sus orejas puntiagudas y mirada penetrante, simboliza la lucha por preservar nuestra biodiversidad.',
      fecha: new Date('2025-05-03'),
    },
    {
      titulo: 'El mejor amigo del hombre, el perro',
      imagen: 'imgs/perro.jpg',
      descripcion:
        'Desde hace miles de años, los perros han acompañado al ser humano como guardianes, pastores y compañeros fieles. Su capacidad para entendernos y generar vínculos emocionales los convierte en algo más que una mascota. ',
      fecha: new Date('2025-06-15'),
    },
  ];

  crearPost() {
    const campos = this.postBlog;

    if (
      !campos.titulo.trim() ||
      !campos.imagen.trim() ||
      !campos.descripcion.trim() ||
      !campos.fecha.trim()
    ) {
      alert('Todos los campos del formulario son obligatorios.');
      return;
    }

    this.arrayPosts.push({
      titulo: campos.titulo,
      imagen: campos.imagen,
      descripcion: campos.descripcion,
      fecha: campos.fecha,
    });

    this.postBlog = {
      titulo: '',
      imagen: '',
      descripcion: '',
      fecha: '',
    };
  }

  cargarImagen(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.postBlog.imagen = URL.createObjectURL(file);
    }
  }

  pintarPost() {
    let html = '';
    this.arrayPosts.forEach((postBlog) => {
      html += `<div class="card">
      <h5 class="card-title">${postBlog.titulo}</h5>
        <img src="${postBlog.imagen}" class="card-img-top" alt="${
        postBlog.titulo
      }">
        <div class="card-body">
          <p class="card-text">${postBlog.descripcion}</p>
          <p class="card-text"><small class="text-muted">Publicado el ${new Date(postBlog.fecha).toLocaleDateString()}</small></p>
        </div>
      </div>`;
    });
    return html;
  }
}
