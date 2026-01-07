// Script para inicializar la base de datos
import mysql from 'mysql2/promise';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function setupDatabase() {
  try {
    // Conectar a MySQL sin especificar la base de datos
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '123456',
      multipleStatements: true
    });

    console.log('✅ Conectado a MySQL');

    // Leer el archivo schema.sql
    const schemaPath = path.join(__dirname, '..', 'database', 'schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');
    
    // Ejecutar el schema
    await connection.query(schema);
    console.log('✅ Base de datos y tablas creadas');

    // Leer el archivo seed.sql
    const seedPath = path.join(__dirname, '..', 'database', 'seed.sql');
    const seed = fs.readFileSync(seedPath, 'utf8');
    
    // Ejecutar el seed
    await connection.query(seed);
    console.log('✅ Datos de ejemplo insertados');

    await connection.end();
    console.log('✅ Setup completado exitosamente');
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

setupDatabase();
