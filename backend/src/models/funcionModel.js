import pool from '../config/database.js';

export const getAllFunciones = async () => {
  const [rows] = await pool.query(`
    SELECT f.*, p.titulo as pelicula_titulo, s.nombre as sala_nombre
    FROM funciones f
    JOIN peliculas p ON f.pelicula_id = p.id
    JOIN salas s ON f.sala_id = s.id
    ORDER BY f.fecha, f.hora
  `);
  return rows;
};

export const getFuncionById = async (id) => {
  const [rows] = await pool.query(`
    SELECT f.*, p.titulo as pelicula_titulo, s.nombre as sala_nombre
    FROM funciones f
    JOIN peliculas p ON f.pelicula_id = p.id
    JOIN salas s ON f.sala_id = s.id
    WHERE f.id = ?
  `, [id]);
  return rows[0];
};

export const getFuncionesByPelicula = async (peliculaId) => {
  const [rows] = await pool.query(`
    SELECT f.*, s.nombre as sala_nombre
    FROM funciones f
    JOIN salas s ON f.sala_id = s.id
    WHERE f.pelicula_id = ?
    ORDER BY f.fecha, f.hora
  `, [peliculaId]);
  return rows;
};

export const createFuncion = async (funcion) => {
  const { pelicula_id, sala_id, fecha, hora, precio } = funcion;
  const [result] = await pool.query(
    'INSERT INTO funciones (pelicula_id, sala_id, fecha, hora, precio) VALUES (?, ?, ?, ?, ?)',
    [pelicula_id, sala_id, fecha, hora, precio]
  );
  return result.insertId;
};

export const updateFuncion = async (id, funcion) => {
  const { pelicula_id, sala_id, fecha, hora, precio } = funcion;
  const [result] = await pool.query(
    'UPDATE funciones SET pelicula_id = ?, sala_id = ?, fecha = ?, hora = ?, precio = ? WHERE id = ?',
    [pelicula_id, sala_id, fecha, hora, precio, id]
  );
  return result.affectedRows;
};

export const deleteFuncion = async (id) => {
  const [result] = await pool.query('DELETE FROM funciones WHERE id = ?', [id]);
  return result.affectedRows;
};
