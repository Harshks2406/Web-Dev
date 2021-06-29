const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

const db = new Sequelize('mytestdb', 'myuser', 'password',{
    host : 'localhost',
    dialect: 'mysql'
}) 

db.authenticate();
    console.log('Connection has been established successfully.');

module.exports={
    db
}