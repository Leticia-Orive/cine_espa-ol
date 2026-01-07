import pool from '../config/database.js';

export const getAllPeliculas = async () => {
  const [rows] = await pool.query('SELECT * FROM peliculas');
  return rows;
};

export const getPeliculaById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM peliculas WHERE id = ?', [id]);
  return rows[0];
};

export const createPelicula = async (pelicula) => {
  const { titulo, director, duracion, genero, sinopsis, imagen_url, clasificacion } = pelicula;
  const [result] = await pool.query(
    'INSERT INTO peliculas (titulo, director, duracion, genero, sinopsis, imagen_url, clasificacion) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [titulo, director, duracion, genero, sinopsis, imagen_url, clasificacion]
  );
  return result.insertId;
};

export const updatePelicula = async (id, pelicula) => {
  const { titulo, director, duracion, genero, sinopsis, imagen_url, clasificacion } = pelicula;
  const [result] = await pool.query(
    'UPDATE peliculas SET titulo = ?, director = ?, duracion = ?, genero = ?, sinopsis = ?, imagen_url = ?, clasificacion = ? WHERE id = ?',
    [titulo, director, duracion, genero, sinopsis, imagen_url, clasificacion, id]
  );
  return result.affectedRows;
};

export const deletePelicula = async (id) => {
  const [result] = await pool.query('DELETE FROM peliculas WHERE id = ?', [id]);
  return result.affectedRows;
};
