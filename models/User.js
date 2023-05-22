const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  githubId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  githubUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
