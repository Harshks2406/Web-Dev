const { Model } = require('sequelize')
const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

const db = new Sequelize('mytestdb', 'myuser', 'password',{
    host : 'localhost',
    dialect: 'mysql'
}) 

const student = db.define('student',{
    name : {
        type: DataTypes.STRING(40),
        allowNull : false
    },
    age: {
        type: DataTypes.INTEGER(2) ,
        allowNull : false,
        defaultValue : -1
    },
})

db.sync({alter: true})
    .then(() => console.log('Database Synchronised'))
    .catch(console.err)

module.exports={
    db, student
}