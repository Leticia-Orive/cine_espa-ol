const imagenes = [
  { id: 1, url: 'https://image.tmdb.org/t/p/w500/l1GRe7r7EMvl2FmMVBFzxdwpT8S.jpg' },
  { id: 2, url: 'https://image.tmdb.org/t/p/w500/pMUwX5F2wXLdQRvzKjfC6HJWPzb.jpg' },
  { id: 3, url: 'https://image.tmdb.org/t/p/w500/eAUzmhVSPJJBGHY6pB0KhQzMO1V.jpg' },
  { id: 4, url: 'https://image.tmdb.org/t/p/w500/lSqbOA9OsLBFBjRbKnrMDEGKlJj.jpg' },
  { id: 5, url: 'https://image.tmdb.org/t/p/w500/mf8JzMHbpXhPIS5MnVHJqXD3XlS.jpg' },
  { id: 6, url: 'https://image.tmdb.org/t/p/w500/6X1b5hEBOdebG3Vh5wN8zqDUGwN.jpg' }
];

async function actualizarImagenes() {
  for (const img of imagenes) {
    try {
      // Obtener película actual
      const response = await fetch(`http://localhost:3000/api/peliculas/${img.id}`);
      const pelicula = await response.json();
      
      // Actualizar con nueva URL
      pelicula.imagen_url = img.url;
      
      const updateResponse = await fetch(`http://localhost:3000/api/peliculas/${img.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pelicula)
      });
      
      if (updateResponse.ok) {
        console.log(`✅ Actualizada película ${img.id}`);
      } else {
        console.error(`❌ Error actualizando película ${img.id}`);
      }
    } catch (error) {
      console.error(`❌ Error con película ${img.id}:`, error.message);
    }
  }
  
  console.log('✅ Proceso completado');
}

actualizarImagenes();
