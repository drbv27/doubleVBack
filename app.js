const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes, Op } = require('sequelize');

const app = express();
const PORT = 3000;

// Habilitar CORS
app.use(cors());

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite',
});

// Definición del modelo de usuarios
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  githubId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  githubUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isUrl: true,
    },
  },
});

// Middleware para procesar el body de las peticiones
app.use(express.json());

// Crear un usuario en la base de datos
app.post('/users', async (req, res) => {
  try {
    const { username, githubId, githubUrl } = req.body;

    // Validar inputs
    if (!username || !githubId || !githubUrl) {
      return res.status(400).json({ message: 'Faltan campos obligatorios' });
    }

    const user = await User.create({
      username,
      githubId,
      githubUrl,
    });

    res.status(201).json({ message: 'Usuario creado exitosamente', user });
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    res.status(500).json({ message: 'Error al crear el usuario' });
  }
});

// Obtener todos los usuarios de la base de datos
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    res.status(500).json({ message: 'Error al obtener los usuarios' });
  }
});

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ message: 'Error interno del servidor' });
});

// Sincronizar el modelo con la base de datos y luego iniciar el servidor
sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor en ejecución en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al sincronizar el modelo con la base de datos:', error);
  });



/* startApp(); */
