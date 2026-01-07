import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PeliculaService } from '../../services/pelicula.service';
import { Pelicula } from '../../models/cine.models';

@Component({
  selector: 'app-peliculas',
  imports: [CommonModule, FormsModule],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent implements OnInit {
  peliculas: Pelicula[] = [];
  loading = true;
  error = '';
  showForm = false;
  editMode = false;

  currentPelicula: Pelicula = {
    titulo: '',
    director: '',
    duracion: 0,
    genero: '',
    sinopsis: '',
    imagen_url: '',
    clasificacion: ''
  };

  constructor(private peliculaService: PeliculaService) {}

  ngOnInit(): void {
    this.loadPeliculas();
  }

  loadPeliculas(): void {
    this.loading = true;
    this.peliculaService.getPeliculas().subscribe({
      next: (data) => {
        this.peliculas = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar las películas';
        this.loading = false;
        console.error(err);
      }
    });
  }

  openForm(pelicula?: Pelicula): void {
    this.showForm = true;
    if (pelicula) {
      this.editMode = true;
      this.currentPelicula = { ...pelicula };
    } else {
      this.editMode = false;
      this.currentPelicula = {
        titulo: '',
        director: '',
        duracion: 0,
        genero: '',
        sinopsis: '',
        imagen_url: '',
        clasificacion: ''
      };
    }
  }

  closeForm(): void {
    this.showForm = false;
    this.editMode = false;
  }

  savePelicula(): void {
    if (this.editMode && this.currentPelicula.id) {
      this.peliculaService.updatePelicula(this.currentPelicula.id, this.currentPelicula).subscribe({
        next: () => {
          this.loadPeliculas();
          this.closeForm();
        },
        error: (err) => {
          this.error = 'Error al actualizar la película';
          console.error(err);
        }
      });
    } else {
      this.peliculaService.createPelicula(this.currentPelicula).subscribe({
        next: () => {
          this.loadPeliculas();
          this.closeForm();
        },
        error: (err) => {
          this.error = 'Error al crear la película';
          console.error(err);
        }
      });
    }
  }

  deletePelicula(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta película?')) {
      this.peliculaService.deletePelicula(id).subscribe({
        next: () => {
          this.loadPeliculas();
        },
        error: (err) => {
          this.error = 'Error al eliminar la película';
          console.error(err);
        }
      });
    }
  }
}
