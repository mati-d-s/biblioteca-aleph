const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes'); // Importar las rutas de usuario
const connectDB = require('./config/db'); // Importar la conexión a la base de datos

dotenv.config(); // Cargar las variables de entorno desde .env

const app = express();
const port = process.env.PORT || 3001;

// Conectar a la base de datos
connectDB();

// Middleware
app.use(cors()); // Habilitar CORS
app.use(express.json()); // Parsear el cuerpo de las solicitudes como JSON

// Rutas
app.use('/api/users', userRoutes); // Rutas de usuario

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Bienvenido al backend!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});


app.get('/libros', (req, res) => {
  connection.query('SELECT * FROM Libros', (err, results) => {
      if (err) return res.status(500).send(err);
      res.json(results);
  });
});


app.get('/socios', (req, res) => {
  connection.query('SELECT * FROM Socios', (err, results) => {
      if (err) return res.status(500).send(err);
      res.json(results);
  });
});


app.get('/editoriales', (req, res) => {
  connection.query('SELECT * FROM Editorial', (err, results) => {
      if (err) return res.status(500).send(err);
      res.json(results);
  });
});


app.get('/estados', (req, res) => {
  connection.query('SELECT * FROM Estado', (err, results) => {
      if (err) return res.status(500).send(err);
      res.json(results);
  });
});


app.get('/prestamos', (req, res) => {
  connection.query('SELECT * FROM Prestamos', (err, results) => {
      if (err) return res.status(500).send(err);
      res.json(results);
  });
});
