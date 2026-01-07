import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import peliculaRoutes from './routes/peliculaRoutes.js';
import salaRoutes from './routes/salaRoutes.js';
import funcionRoutes from './routes/funcionRoutes.js';
import reservaRoutes from './routes/reservaRoutes.js';
import pool from './config/database.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use('/api/peliculas', peliculaRoutes);
app.use('/api/salas', salaRoutes);
app.use('/api/funciones', funcionRoutes);
app.use('/api/reservas', reservaRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'API de Cine funcionando correctamente' });
});

// Verificar conexión a la base de datos
pool.getConnection()
  .then(connection => {
    console.log('✅ Conexión exitosa a MySQL');
    connection.release();
    
    // Iniciar servidor
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Error al conectar a MySQL:', err.message);
    console.log('Por favor verifica tu configuración en el archivo .env');
  });
