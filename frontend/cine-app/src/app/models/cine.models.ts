export interface Pelicula {
  id?: number;
  titulo: string;
  director: string;
  duracion: number;
  genero: string;
  sinopsis: string;
  imagen_url: string;
  clasificacion: string;
  fecha_creacion?: string;
}

export interface Sala {
  id?: number;
  nombre: string;
  capacidad: number;
  tipo: string;
  fecha_creacion?: string;
}

export interface Funcion {
  id?: number;
  pelicula_id: number;
  sala_id: number;
  fecha: string;
  hora: string;
  precio: number;
  pelicula_titulo?: string;
  sala_nombre?: string;
  fecha_creacion?: string;
}

export interface Reserva {
  id?: number;
  funcion_id: number;
  nombre_cliente: string;
  email_cliente: string;
  num_asientos: number;
  asientos: string;
  fecha?: string;
  hora?: string;
  pelicula?: string;
  sala?: string;
  fecha_reserva?: string;
}
