const { Sequelize, DataTypes } = require('sequelize');

// Configuración de la conexión a la base de datos SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite',
});

// Verificar la conexión a la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión establecida correctamente.');
  })
  .catch((error) => {
    console.error('No se pudo conectar a la base de datos:', error);
  });

// Definición del modelo User
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  githubId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  githubUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Función para sincronizar la base de datos
async function syncDatabase() {
  try {
    await sequelize.sync({ force: true });
    console.log('Base de datos sincronizada correctamente.');
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  }
}

module.exports = { sequelize, User, syncDatabase };


