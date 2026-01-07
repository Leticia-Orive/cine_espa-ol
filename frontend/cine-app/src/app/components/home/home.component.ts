import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculaService } from '../../services/pelicula.service';
import { Pelicula } from '../../models/cine.models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  peliculas: Pelicula[] = [];
  loading = true;
  error = '';

  constructor(private peliculaService: PeliculaService) {}

  ngOnInit(): void {
    this.loadPeliculas();
  }

  loadPeliculas(): void {
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
}
