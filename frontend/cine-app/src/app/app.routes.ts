import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { FuncionesComponent } from './components/funciones/funciones.component';
import { ReservasComponent } from './components/reservas/reservas.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'funciones', component: FuncionesComponent },
  { path: 'funciones/:peliculaId', component: FuncionesComponent },
  { path: 'reservas', component: ReservasComponent },
  { path: '**', redirectTo: '' }
];

