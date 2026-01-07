import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pelicula } from '../models/cine.models';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private apiUrl = 'http://localhost:3000/api/peliculas';

  constructor(private http: HttpClient) { }

  getPeliculas(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(this.apiUrl);
  }

  getPelicula(id: number): Observable<Pelicula> {
    return this.http.get<Pelicula>(`${this.apiUrl}/${id}`);
  }

  createPelicula(pelicula: Pelicula): Observable<any> {
    return this.http.post(this.apiUrl, pelicula);
  }

  updatePelicula(id: number, pelicula: Pelicula): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, pelicula);
  }

  deletePelicula(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
