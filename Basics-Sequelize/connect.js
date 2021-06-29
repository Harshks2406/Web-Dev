const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

const db = new Sequelize('sampledb1', 'myuser', 'password',{
    host : 'localhost',
    dialect: 'mysql'
}) 

module.exports={
    db
}