//We require in sequeilze.js filew which is a model or a table
const { Sequelize } = require("sequelize");
const sequelize = require("./sequelize");
const board = sequelize.define('board', {
  type: Sequelize.STRING,
  description: Sequelize.STRING,
  rating: Sequelize.INTEGER
});

module.exports = board