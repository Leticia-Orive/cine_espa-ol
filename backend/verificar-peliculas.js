import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

async function verificarPeliculas() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '123456',
    database: process.env.DB_NAME || 'cine_español'
  });

  const [peliculas] = await connection.query('SELECT id, titulo, imagen_url FROM peliculas');
  
  console.log('\n📽️  Películas en la base de datos:\n');
  peliculas.forEach(p => {
    console.log(`ID: ${p.id}`);
    console.log(`Título: ${p.titulo}`);
    console.log(`URL: ${p.imagen_url}`);
    console.log('---');
  });

  await connection.end();
}

verificarPeliculas().catch(console.error);
