import pool from '../config/database.js';

export const getAllReservas = async () => {
  const [rows] = await pool.query(`
    SELECT r.*, f.fecha, f.hora, p.titulo as pelicula, s.nombre as sala
    FROM reservas r
    JOIN funciones f ON r.funcion_id = f.id
    JOIN peliculas p ON f.pelicula_id = p.id
    JOIN salas s ON f.sala_id = s.id
    ORDER BY r.fecha_reserva DESC
  `);
  return rows;
};

export const getReservaById = async (id) => {
  const [rows] = await pool.query(`
    SELECT r.*, f.fecha, f.hora, p.titulo as pelicula, s.nombre as sala
    FROM reservas r
    JOIN funciones f ON r.funcion_id = f.id
    JOIN peliculas p ON f.pelicula_id = p.id
    JOIN salas s ON f.sala_id = s.id
    WHERE r.id = ?
  `, [id]);
  return rows[0];
};

export const createReserva = async (reserva) => {
  const { funcion_id, nombre_cliente, email_cliente, num_asientos, asientos } = reserva;
  const [result] = await pool.query(
    'INSERT INTO reservas (funcion_id, nombre_cliente, email_cliente, num_asientos, asientos) VALUES (?, ?, ?, ?, ?)',
    [funcion_id, nombre_cliente, email_cliente, num_asientos, asientos]
  );
  return result.insertId;
};

export const deleteReserva = async (id) => {
  const [result] = await pool.query('DELETE FROM reservas WHERE id = ?', [id]);
  return result.affectedRows;
};

export const getAsientosOcupados = async (funcionId) => {
  const [rows] = await pool.query(
    'SELECT asientos FROM reservas WHERE funcion_id = ?',
    [funcionId]
  );
  return rows;
};
