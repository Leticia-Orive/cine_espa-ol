import mysql from 'mysql2/promise';

async function actualizarImagenes() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'cine_español'
  });

  const imagenes = {
    1: 'https://image.tmdb.org/t/p/w500/l1GRe7r7EMvl2FmMVBFzxdwpT8S.jpg', // El Laberinto del Fauno
    2: 'https://image.tmdb.org/t/p/w500/pMUwX5F2wXLdQRvzKjfC6HJWPzb.jpg', // Todo sobre mi madre
    3: 'https://image.tmdb.org/t/p/w500/eAUzmhVSPJJBGHY6pB0KhQzMO1V.jpg', // Mar adentro
    4: 'https://image.tmdb.org/t/p/w500/lSqbOA9OsLBFBjRbKnrMDEGKlJj.jpg', // REC
    5: 'https://image.tmdb.org/t/p/w500/mf8JzMHbpXhPIS5MnVHJqXD3XlS.jpg', // Volver
    6: 'https://image.tmdb.org/t/p/w500/6X1b5hEBOdebG3Vh5wN8zqDUGwN.jpg'  // Celda 211
  };

  for (const [id, url] of Object.entries(imagenes)) {
    await connection.query(
      'UPDATE peliculas SET imagen_url = ? WHERE id = ?',
      [url, id]
    );
    console.log(`✅ Actualizada película ${id}`);
  }

  await connection.end();
  console.log('✅ Todas las imágenes actualizadas');
}

actualizarImagenes().catch(console.error);
