const Sequelize = require('sequelize');
const sequelize = require("./sequelize");
const cheese = sequelize.define('cheese', {
  title: Sequelize.STRING,
  description: Sequelize.STRING
});

module.exports = cheese
