import pool from '../config/database.js';

export const getAllSalas = async () => {
  const [rows] = await pool.query('SELECT * FROM salas');
  return rows;
};

export const getSalaById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM salas WHERE id = ?', [id]);
  return rows[0];
};

export const createSala = async (sala) => {
  const { nombre, capacidad, tipo } = sala;
  const [result] = await pool.query(
    'INSERT INTO salas (nombre, capacidad, tipo) VALUES (?, ?, ?)',
    [nombre, capacidad, tipo]
  );
  return result.insertId;
};

export const updateSala = async (id, sala) => {
  const { nombre, capacidad, tipo } = sala;
  const [result] = await pool.query(
    'UPDATE salas SET nombre = ?, capacidad = ?, tipo = ? WHERE id = ?',
    [nombre, capacidad, tipo, id]
  );
  return result.affectedRows;
};

export const deleteSala = async (id) => {
  const [result] = await pool.query('DELETE FROM salas WHERE id = ?', [id]);
  return result.affectedRows;
};
