-- Actualizar URLs de imágenes con URLs reales
USE cine_español;

UPDATE peliculas SET imagen_url = 'https://m.media-amazon.com/images/M/MV5BYzFjMThiMGItOWRlMC00MDI4LWI4ZjQtYjY4MzRmYTU5MzhhXkEyXkFqcGc@._V1_.jpg' WHERE titulo = 'El Laberinto del Fauno';
UPDATE peliculas SET imagen_url = 'https://m.media-amazon.com/images/M/MV5BNjkxMzIyYWYtMzY5OS00OTUzLWE0ODMtNzI2MGUxN2Y5NzNjXkEyXkFqcGc@._V1_.jpg' WHERE titulo = 'Todo sobre mi madre';
UPDATE peliculas SET imagen_url = 'https://m.media-amazon.com/images/M/MV5BYzJiNDQwNGEtZDE1MC00OWVhLTkzNDAtOTk3ODQxNjhjZTg2XkEyXkFqcGc@._V1_.jpg' WHERE titulo = 'Mar adentro';
UPDATE peliculas SET imagen_url = 'https://m.media-amazon.com/images/M/MV5BMjA5OTg1NTYwNF5BMl5BanBnXkFtZTcwMDA1MzEzMw@@._V1_.jpg' WHERE titulo = 'REC';
UPDATE peliculas SET imagen_url = 'https://m.media-amazon.com/images/M/MV5BYzI3ZjQxYjktNDI1Mi00OGNiLWEzNDEtZDFjZjBjOTU4ODBkXkEyXkFqcGc@._V1_.jpg' WHERE titulo = 'Volver';
UPDATE peliculas SET imagen_url = 'https://m.media-amazon.com/images/M/MV5BMTdmYTA2ZTUtYjJhZS00M2M1LWIzZmMtZDUxNzE0MjYzNTQwXkEyXkFqcGc@._V1_.jpg' WHERE titulo = 'Celda 211';
