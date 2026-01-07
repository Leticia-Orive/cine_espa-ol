import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionService } from '../../services/funcion.service';
import { Funcion } from '../../models/cine.models';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-funciones',
  imports: [CommonModule, RouterLink],
  templateUrl: './funciones.component.html',
  styleUrl: './funciones.component.css'
})
export class FuncionesComponent implements OnInit {
  funciones: Funcion[] = [];
  loading = true;
  error = '';
  peliculaId: number | null = null;

  constructor(
    private funcionService: FuncionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['peliculaId']) {
        this.peliculaId = +params['peliculaId'];
        this.loadFuncionesByPelicula(this.peliculaId);
      } else {
        this.loadFunciones();
      }
    });
  }

  loadFunciones(): void {
    this.loading = true;
    this.funcionService.getFunciones().subscribe({
      next: (data) => {
        this.funciones = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar las funciones';
        this.loading = false;
        console.error(err);
      }
    });
  }

  loadFuncionesByPelicula(peliculaId: number): void {
    this.loading = true;
    this.funcionService.getFuncionesByPelicula(peliculaId).subscribe({
      next: (data) => {
        this.funciones = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar las funciones de esta película';
        this.loading = false;
        console.error(err);
      }
    });
  }

  formatFecha(fecha: string): string {
    return new Date(fecha).toLocaleDateString('es-ES');
  }
}
