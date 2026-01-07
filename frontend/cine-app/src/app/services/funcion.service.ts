import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcion } from '../models/cine.models';

@Injectable({
  providedIn: 'root'
})
export class FuncionService {
  private apiUrl = 'http://localhost:3000/api/funciones';

  constructor(private http: HttpClient) { }

  getFunciones(): Observable<Funcion[]> {
    return this.http.get<Funcion[]>(this.apiUrl);
  }

  getFuncion(id: number): Observable<Funcion> {
    return this.http.get<Funcion>(`${this.apiUrl}/${id}`);
  }

  getFuncionesByPelicula(peliculaId: number): Observable<Funcion[]> {
    return this.http.get<Funcion[]>(`${this.apiUrl}/pelicula/${peliculaId}`);
  }

  createFuncion(funcion: Funcion): Observable<any> {
    return this.http.post(this.apiUrl, funcion);
  }

  updateFuncion(id: number, funcion: Funcion): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, funcion);
  }

  deleteFuncion(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
