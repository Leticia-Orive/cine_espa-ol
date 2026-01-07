# Base de Datos MySQL - Sistema de Cine

## Configuración

### 1. Instalar MySQL
Asegúrate de tener MySQL instalado en tu sistema.

### 2. Crear la base de datos
Ejecuta el siguiente comando en MySQL:

```bash
mysql -u root -p < schema.sql
```

### 3. Poblar con datos de ejemplo (opcional)
```bash
mysql -u root -p < seed.sql
```

## Estructura de Tablas

### peliculas
- `id`: ID único
- `titulo`: Título de la película
- `director`: Director
- `duracion`: Duración en minutos
- `genero`: Género
- `sinopsis`: Descripción
- `imagen_url`: URL de la imagen
- `clasificacion`: Clasificación por edad (ATP, +13, +16, +18)

### salas
- `id`: ID único
- `nombre`: Nombre de la sala
- `capacidad`: Número de asientos
- `tipo`: Tipo de sala (2D, 3D, IMAX, 4DX)

### funciones
- `id`: ID único
- `pelicula_id`: Referencia a película
- `sala_id`: Referencia a sala
- `fecha`: Fecha de la función
- `hora`: Hora de inicio
- `precio`: Precio de entrada

### reservas
- `id`: ID único
- `funcion_id`: Referencia a función
- `nombre_cliente`: Nombre del cliente
- `email_cliente`: Email del cliente
- `num_asientos`: Cantidad de asientos
- `asientos`: Lista de asientos (ej: A1,A2,A3)
