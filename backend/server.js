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

    data.push(newUser);
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

    res.status(201).json({ message: 'Usuario registrado con éxito', user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error al guardar el usuario", error: error.message });
  }
});

// Ruta para obtener los productos en la cesta de un usuario
// Ruta para obtener los productos en la cesta de un usuario
app.get('/cart/:username', (req, res) => {
  const { username } = req.params;
  const cartFilePath = path.join(__dirname, 'carts.json');

  try {
    let carts = [];

    if (fs.existsSync(cartFilePath)) {
      carts = JSON.parse(fs.readFileSync(cartFilePath, 'utf8'));
    }

    // Buscar la cesta del usuario
    const userCart = carts.find(cart => cart.username === username);

    if (userCart) {
      res.json(userCart.products); // Devuelve los productos en la cesta
    } else {
      res.status(404).json({ message: 'No se encontró la cesta para este usuario' });
    }

  } catch (error) {
    res.status(500).json({ message: "Error al leer la cesta", error: error.message });
  }
});

// Ruta para agregar un producto a la cesta de un usuario
app.post('/cesta', (req, res) => {
  const { username, product } = req.body;

  // Verifica que los datos recibidos son correctos
  console.log('Datos recibidos:', req.body); // Verifica la estructura de los datos

  // Asegúrate de que el producto contiene todos los campos necesarios
  if (!username || !product || !product.id || !product.name || !product.price || !product.image) {
    return res.status(400).json({ message: 'Datos incompletos para agregar el producto a la cesta' });
  }

  const cartFilePath = path.join(__dirname, 'carts.json');
  let carts = [];

  try {
    if (fs.existsSync(cartFilePath)) {
      carts = JSON.parse(fs.readFileSync(cartFilePath, 'utf8'));
    }

    // Buscar la cesta del usuario
    let userCart = carts.find(cart => cart.username === username);

    if (!userCart) {
      // Si no existe la cesta para el usuario, crear una nueva
      userCart = { username, products: [] };
      carts.push(userCart);
    }

    // Añadir el producto a la cesta
    userCart.products.push(product);

    // Guardar los cambios en el archivo carts.json
    fs.writeFileSync(cartFilePath, JSON.stringify(carts, null, 2));

    res.status(201).json({ message: 'Producto añadido a la cesta con éxito' });

  } catch (error) {
    res.status(500).json({ message: "Error al agregar el producto a la cesta", error: error.message });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
