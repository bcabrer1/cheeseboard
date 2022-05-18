//WE HAVE TO USE UPPERCASE S
//requires in the sequlilize module and imports it into project
const Sequelize = require('sequelize');
//The node:path module provides utilities for working with file and directory paths; ask C.Elvis
const path = require('node:path');
// creating a varaible from a class Sequelize by adding dialect + storage, can be any name as long as consistent
const ben = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'db.sqlite') //the storage which is why there is a small folder 
  // or storage: './db.sqlite'
});
//must export the module
module.exports = ben
