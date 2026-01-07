-- Base de datos para sistema de cine
CREATE DATABASE IF NOT EXISTS cine_español;
USE cine_español;

-- Tabla de películas
CREATE TABLE IF NOT EXISTS peliculas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  director VARCHAR(255),
  duracion INT NOT NULL COMMENT 'Duración en minutos',
  genero VARCHAR(100),
  sinopsis TEXT,
  imagen_url VARCHAR(500),
  clasificacion VARCHAR(10) COMMENT 'Ej: ATP, +13, +16, +18',
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_titulo (titulo),
  INDEX idx_genero (genero)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla de salas
CREATE TABLE IF NOT EXISTS salas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  capacidad INT NOT NULL,
  tipo VARCHAR(50) COMMENT 'Ej: 2D, 3D, IMAX, 4DX',
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_nombre (nombre)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla de funciones
CREATE TABLE IF NOT EXISTS funciones (
  id INT AUTO_INCREMENT PRIMARY KEY,
  pelicula_id INT NOT NULL,
  sala_id INT NOT NULL,
  fecha DATE NOT NULL,
  hora TIME NOT NULL,
  precio DECIMAL(10, 2) NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (pelicula_id) REFERENCES peliculas(id) ON DELETE CASCADE,
  FOREIGN KEY (sala_id) REFERENCES salas(id) ON DELETE CASCADE,
  INDEX idx_fecha (fecha),
  INDEX idx_pelicula (pelicula_id),
  INDEX idx_sala (sala_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla de reservas
CREATE TABLE IF NOT EXISTS reservas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  funcion_id INT NOT NULL,
  nombre_cliente VARCHAR(255) NOT NULL,
  email_cliente VARCHAR(255) NOT NULL,
  num_asientos INT NOT NULL,
  asientos VARCHAR(500) COMMENT 'Lista de asientos separados por coma: A1,A2,A3',
  fecha_reserva TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (funcion_id) REFERENCES funciones(id) ON DELETE CASCADE,
  INDEX idx_funcion (funcion_id),
  INDEX idx_email (email_cliente)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
