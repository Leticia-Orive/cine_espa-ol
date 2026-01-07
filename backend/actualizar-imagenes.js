import mysql from 'mysql2/promise';

async function actualizarImagenes() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'cine_español'
  });

  const imagenes = {
    1: 'https://pics.filmaffinity.com/El_laberinto_del_fauno-476023024-large.jpg', // El Laberinto del Fauno
    2: 'https://pics.filmaffinity.com/Todo_sobre_mi_madre-517973090-large.jpg', // Todo sobre mi madre
    3: 'https://pics.filmaffinity.com/Mar_adentro-998445563-large.jpg', // Mar adentro
    4: 'https://pics.filmaffinity.com/REC-831524480-large.jpg', // REC
    5: 'https://pics.filmaffinity.com/Volver-458018906-large.jpg', // Volver
    6: 'https://pics.filmaffinity.com/Celda_211-854877086-large.jpg'  // Celda 211
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
