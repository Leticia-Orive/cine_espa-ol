# Sistema de Gestión de Cine

Proyecto completo de gestión de cine con **Angular 19**, **Node.js/Express** y **MySQL**.

## 📁 Estructura del Proyecto

```
cine_español/
├── backend/           # API REST con Node.js y Express
├── frontend/          # Aplicación Angular 19
└── database/          # Scripts SQL para MySQL
```

## 🚀 Instalación y Configuración

### 1. Configurar Base de Datos MySQL

```bash
# Crear la base de datos
mysql -u root -p < database/schema.sql

# (Opcional) Poblar con datos de ejemplo
mysql -u root -p < database/seed.sql
```

### 2. Configurar Backend

```bash
cd backend

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales de MySQL

# Iniciar servidor
npm start
# O en modo desarrollo:
npm run dev
```

El servidor estará disponible en `http://localhost:3000`

### 3. Configurar Frontend

```bash
cd frontend/cine-app

# Instalar dependencias
npm install

# Iniciar aplicación
ng serve

# O en modo producción:
ng build
```

La aplicación estará disponible en `http://localhost:4200`

## 📊 Características

### Backend (API REST)
- ✅ CRUD de películas
- ✅ Gestión de salas
- ✅ Administración de funciones
- ✅ Sistema de reservas
- ✅ Validación de asientos ocupados

### Frontend (Angular 19)
- 🎬 Catálogo de películas en cartelera
- 🎥 Visualización de funciones disponibles
- 🎟️ Sistema de reservas
- 📝 Panel de administración de películas
- 📱 Diseño responsive

### Base de Datos (MySQL)
- Películas (título, director, duración, género, sinopsis, etc.)
- Salas (nombre, capacidad, tipo)
- Funciones (horarios, precios)
- Reservas (clientes, asientos)

## 🌐 API Endpoints

### Películas
- `GET /api/peliculas` - Listar todas
- `GET /api/peliculas/:id` - Obtener una
- `POST /api/peliculas` - Crear nueva
- `PUT /api/peliculas/:id` - Actualizar
- `DELETE /api/peliculas/:id` - Eliminar

### Salas
- `GET /api/salas` - Listar todas
- `GET /api/salas/:id` - Obtener una
- `POST /api/salas` - Crear nueva
- `PUT /api/salas/:id` - Actualizar
- `DELETE /api/salas/:id` - Eliminar

### Funciones
- `GET /api/funciones` - Listar todas
- `GET /api/funciones/:id` - Obtener una
- `GET /api/funciones/pelicula/:peliculaId` - Por película
- `POST /api/funciones` - Crear nueva
- `PUT /api/funciones/:id` - Actualizar
- `DELETE /api/funciones/:id` - Eliminar

### Reservas
- `GET /api/reservas` - Listar todas
- `GET /api/reservas/:id` - Obtener una
- `GET /api/reservas/asientos/:funcionId` - Asientos ocupados
- `POST /api/reservas` - Crear nueva
- `DELETE /api/reservas/:id` - Eliminar

## 🛠️ Tecnologías Utilizadas

- **Frontend**: Angular 19, TypeScript, CSS3
- **Backend**: Node.js, Express, ES Modules
- **Base de Datos**: MySQL 8.0+
- **HTTP Client**: Fetch API

## 📝 Notas

- Asegúrate de tener Node.js 18+ instalado
- MySQL debe estar corriendo en el puerto 3306
- El backend debe estar corriendo antes de usar el frontend
- Los datos de ejemplo incluyen películas del cine español

## 👥 Desarrollo

Para contribuir al proyecto:

1. Clona el repositorio
2. Crea una rama para tu feature
3. Realiza tus cambios
4. Envía un pull request

---

**¡Disfruta gestionando tu cine!** 🎬🍿
