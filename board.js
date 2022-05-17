const { Sequelize } = require("sequelize");
const sequelize = require("./sequelize");
const board = sequelize.define('board', {
  type: Sequelize.STRING,
  description: Sequelize.STRING,
  rating: Sequelize.INTEGER
});

module.exports = board