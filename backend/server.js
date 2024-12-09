const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors({
  origin: 'http://localhost:5173',  // Solo permite solicitudes desde tu frontend en el puerto 5173
  methods: ['GET', 'POST', 'PUT'],  // Permite GET, POST y PUT para tus rutas
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());  // Para parsear el cuerpo de las solicitudes como JSON

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

// Ruta para obtener la cesta de un usuario
app.get('/cesta/:username', (req, res) => {
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

// Ruta para crear o añadir un producto a la cesta
app.post('/cesta', (req, res) => {
  const { username, product } = req.body;  // Obtenemos los datos enviados en el cuerpo de la solicitud

  // Verificar que los datos necesarios están presentes
  if (!username || !product || !product.id || !product.name || !product.price || !product.image) {
    return res.status(400).json({ message: 'Datos incompletos para agregar el producto a la cesta' });
  }

  const cartFilePath = path.join(__dirname, 'carts.json');
  let carts = [];

  try {
    if (fs.existsSync(cartFilePath)) {
      carts = JSON.parse(fs.readFileSync(cartFilePath, 'utf8'));
    }

    let userCart = carts.find(cart => cart.username === username);

    if (!userCart) {
      // Si no existe la cesta para el usuario, crear una nueva
      userCart = { username, products: [] };
      carts.push(userCart);
    }

    // Verifica si el producto ya está en la cesta
    const productExists = userCart.products.some(p => p.id === product.id);
    if (productExists) {
      return res.status(400).json({ message: 'El producto ya está en la cesta' });
    }

    userCart.products.push(product);  // Añadir el producto a la cesta
    fs.writeFileSync(cartFilePath, JSON.stringify(carts, null, 2));

    res.status(201).json({ message: 'Producto añadido a la cesta con éxito' });

  } catch (error) {
    console.error('Error al agregar el producto a la cesta:', error); // Captura más detalles del error
    res.status(500).json({ message: 'Error al agregar el producto a la cesta', error: error.message });
  }
});

// Ruta para actualizar la cesta de un usuario
app.put('/cesta/:username', (req, res) => {
  const { username } = req.params;
  const updatedCart = req.body;
  const cartFilePath = path.join(__dirname, 'carts.json');

  try {
    let carts = JSON.parse(fs.readFileSync(cartFilePath, 'utf8'));

    const cartIndex = carts.findIndex(cart => cart.username === username);
    if (cartIndex === -1) {
      return res.status(404).json({ message: 'Cesta no encontrada' });
    }

    carts[cartIndex] = updatedCart;
    fs.writeFileSync(cartFilePath, JSON.stringify(carts, null, 2));

    res.json(updatedCart);  // Devuelve la cesta actualizada
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la cesta", error: error.message });
  }
});

// Ruta para iniciar sesión y obtener el nombre del usuario
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const usersFilePath = path.join(__dirname, 'data.json');

  try {
    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      res.json({ message: 'Login exitoso', username: user.username });
    } else {
      res.status(401).json({ message: 'Credenciales inválidas' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al leer los usuarios', error: error.message });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
