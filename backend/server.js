const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors({
  origin: 'http://localhost:5173',  // Solo permite solicitudes desde tu frontend en el puerto 5173
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json()); // Para parsear el cuerpo de las solicitudes como JSON

// Ruta para obtener los usuarios
app.get('/users', (req, res) => {
  try {
    const users = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8'));
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error al leer los usuarios", error: error.message });
  }
});

// Ruta para registrar un nuevo usuario
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  // Validar que todos los campos estén presentes
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  const newUser = { username, email, password };

  const dataFilePath = path.join(__dirname, 'data.json');
  let data = [];

  try {
    if (fs.existsSync(dataFilePath)) {
      data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
    } else {
      fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
    }

    // Añadir el nuevo usuario a la lista
    data.push(newUser);
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

    res.status(201).json({ message: 'Usuario registrado con éxito', user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error al guardar el usuario", error: error.message });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
