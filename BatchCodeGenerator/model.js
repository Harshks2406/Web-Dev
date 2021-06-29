const {db} = require('./connect')
const{DataTypes} = require('sequelize')

// WDPP21S1 = Web Dev, Pritam Pura, 2021, Summer, Batch 1

const Course = db.define('course',{
    id:{
        type: DataTypes.STRING(2),
        primaryKey: true
    },
    name: DataTypes.STRING(20)
})

const Teacher = db.define('teacher',{
    name : {
        type: DataTypes.STRING(20),
        allowNull : false
    }   
})

const Center = db.define('center',{
    id : {
        type : DataTypes.STRING(2),
        primaryKey : true
    },
    name : {
        type : DataTypes.STRING(15),
        allowNull : false
    },
    city : {
        type : DataTypes.STRING(15),
        allowNull : false
    }
})

const Season = db.define('season',{
    id : {
        type : DataTypes.STRING(2),
        primaryKey : true
    },
    name : {
        type : DataTypes.STRING(10)
    }
})

const Batch = db.define('batch',{
    code : {
        type : DataTypes.STRING(15),
        primaryKey: true
    },
    year: DataTypes.INTEGER(4),
    start : DataTypes.DATE,
    end : DataTypes.DATE
})

//Associations

Batch.belongsTo(Course)
Batch.belongsTo(Center)
Batch.belongsTo(Season)

Course.hasMany(Batch)
Center.hasMany(Batch)
Season.hasMany(Batch)
    
db.sync()

module.exports={
    db,Course,Teacher,Batch,Season,Center
}