-- Datos de ejemplo para el sistema de cine
USE cine_español;

-- Insertar películas de ejemplo
INSERT INTO peliculas (titulo, director, duracion, genero, sinopsis, imagen_url, clasificacion) VALUES
('El Laberinto del Fauno', 'Guillermo del Toro', 118, 'Fantasía', 'En la España de 1944, la joven Ofelia y su madre se mudan con su nuevo padrastro, un capitán del ejército franquista. Durante la noche, Ofelia descubre un laberinto y conoce a un fauno que le dice que es una princesa.', 'https://example.com/laberinto.jpg', '+13'),
('Todo sobre mi madre', 'Pedro Almodóvar', 101, 'Drama', 'Manuela es una madre soltera cuyo hijo muere atropellado el día de su cumpleaños. Manuela regresa a Barcelona para buscar al padre del chico.', 'https://example.com/madre.jpg', '+16'),
('Mar adentro', 'Alejandro Amenábar', 126, 'Drama', 'Basada en la historia real de Ramón Sampedro, quien quedó tetrapléjico tras un accidente y luchó por el derecho a una muerte digna.', 'https://example.com/maradentro.jpg', '+13'),
('REC', 'Jaume Balagueró', 78, 'Terror', 'Una reportera y su camarógrafo quedan atrapados en un edificio mientras cubren una emergencia, y descubren que un virus está convirtiendo a los residentes en zombies.', 'https://example.com/rec.jpg', '+18'),
('Volver', 'Pedro Almodóvar', 121, 'Comedia dramática', 'Raimunda vive en Madrid con su marido y su hija. Su vida da un vuelco cuando su hermana llega con noticias sobre su madre fallecida.', 'https://example.com/volver.jpg', 'ATP'),
('Celda 211', 'Daniel Monzón', 113, 'Thriller', 'Juan Oliver acepta un trabajo como funcionario de prisiones días antes de su boda. Durante su primer día, un motín estalla y debe fingir ser un preso para sobrevivir.', 'https://example.com/celda211.jpg', '+16');

-- Insertar salas de ejemplo
INSERT INTO salas (nombre, capacidad, tipo) VALUES
('Sala 1', 150, '2D'),
('Sala 2', 120, '3D'),
('Sala 3', 200, 'IMAX'),
('Sala 4', 100, '2D'),
('Sala VIP', 50, '4DX');

-- Insertar funciones de ejemplo (próximos 7 días)
INSERT INTO funciones (pelicula_id, sala_id, fecha, hora, precio) VALUES
-- Día 1
(1, 1, DATE_ADD(CURDATE(), INTERVAL 0 DAY), '14:00:00', 8.50),
(1, 1, DATE_ADD(CURDATE(), INTERVAL 0 DAY), '17:30:00', 8.50),
(1, 1, DATE_ADD(CURDATE(), INTERVAL 0 DAY), '21:00:00', 10.00),
(2, 2, DATE_ADD(CURDATE(), INTERVAL 0 DAY), '15:00:00', 9.50),
(2, 2, DATE_ADD(CURDATE(), INTERVAL 0 DAY), '19:30:00', 10.50),
(3, 3, DATE_ADD(CURDATE(), INTERVAL 0 DAY), '16:00:00', 12.00),
(3, 3, DATE_ADD(CURDATE(), INTERVAL 0 DAY), '20:00:00', 12.00),
-- Día 2
(4, 4, DATE_ADD(CURDATE(), INTERVAL 1 DAY), '18:00:00', 8.50),
(4, 4, DATE_ADD(CURDATE(), INTERVAL 1 DAY), '22:00:00', 10.00),
(5, 5, DATE_ADD(CURDATE(), INTERVAL 1 DAY), '15:30:00', 15.00),
(5, 5, DATE_ADD(CURDATE(), INTERVAL 1 DAY), '19:00:00', 15.00),
-- Día 3
(6, 1, DATE_ADD(CURDATE(), INTERVAL 2 DAY), '16:30:00', 8.50),
(6, 1, DATE_ADD(CURDATE(), INTERVAL 2 DAY), '20:30:00', 10.00),
(1, 2, DATE_ADD(CURDATE(), INTERVAL 2 DAY), '14:30:00', 9.50),
(2, 3, DATE_ADD(CURDATE(), INTERVAL 2 DAY), '17:00:00', 12.00);

-- Insertar algunas reservas de ejemplo
INSERT INTO reservas (funcion_id, nombre_cliente, email_cliente, num_asientos, asientos) VALUES
(1, 'Juan Pérez', 'juan.perez@example.com', 2, 'A1,A2'),
(1, 'María García', 'maria.garcia@example.com', 3, 'B5,B6,B7'),
(2, 'Carlos Rodríguez', 'carlos.rodriguez@example.com', 4, 'C1,C2,C3,C4'),
(3, 'Ana Martínez', 'ana.martinez@example.com', 2, 'D10,D11'),
(5, 'Luis Fernández', 'luis.fernandez@example.com', 5, 'E1,E2,E3,E4,E5');
