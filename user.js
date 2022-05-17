const Sequelize = require('sequelize');
const sequelize = require("./sequelize");
const user = sequelize.define('user', {
  name: Sequelize.STRING,
  email: Sequelize.STRING
});

module.exports = user;