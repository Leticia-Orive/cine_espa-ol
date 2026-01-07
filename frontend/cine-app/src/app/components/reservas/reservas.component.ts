import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReservaService } from '../../services/reserva.service';
import { FuncionService } from '../../services/funcion.service';
import { Reserva, Funcion } from '../../models/cine.models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reservas',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css'
})
export class ReservasComponent implements OnInit {
  reservas: Reserva[] = [];
  funciones: Funcion[] = [];
  loading = true;
  error = '';
  showForm = false;

  currentReserva: Reserva = {
    funcion_id: 0,
    nombre_cliente: '',
    email_cliente: '',
    num_asientos: 1,
    asientos: ''
  };

  constructor(
    private reservaService: ReservaService,
    private funcionService: FuncionService
  ) {}

  ngOnInit(): void {
    this.loadReservas();
    this.loadFunciones();
  }

  loadReservas(): void {
    this.loading = true;
    this.reservaService.getReservas().subscribe({
      next: (data) => {
        this.reservas = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar las reservas';
        this.loading = false;
        console.error(err);
      }
    });
  }

  loadFunciones(): void {
    this.funcionService.getFunciones().subscribe({
      next: (data) => {
        this.funciones = data;
      },
      error: (err) => {
        console.error('Error al cargar funciones:', err);
      }
    });
  }

  openForm(): void {
    this.showForm = true;
    this.currentReserva = {
      funcion_id: 0,
      nombre_cliente: '',
      email_cliente: '',
      num_asientos: 1,
      asientos: ''
    };
  }

  closeForm(): void {
    this.showForm = false;
  }

  saveReserva(): void {
    this.reservaService.createReserva(this.currentReserva).subscribe({
      next: () => {
        this.loadReservas();
        this.closeForm();
      },
      error: (err) => {
        this.error = 'Error al crear la reserva';
        console.error(err);
      }
    });
  }

  deleteReserva(id: number): void {
    if (confirm('¿Estás seguro de cancelar esta reserva?')) {
      this.reservaService.deleteReserva(id).subscribe({
        next: () => {
          this.loadReservas();
        },
        error: (err) => {
          this.error = 'Error al cancelar la reserva';
          console.error(err);
        }
      });
    }
  }

  formatFecha(fecha: string): string {
    return new Date(fecha).toLocaleDateString('es-ES');
  }
}
