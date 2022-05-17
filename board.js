const { Sequelize } = require("sequelize/types");

const board = sequelize.define('board', {
  type: Sequelize.STRING,
  description: Sequelize.STRING,
  rating: Sequelize.Integer
});