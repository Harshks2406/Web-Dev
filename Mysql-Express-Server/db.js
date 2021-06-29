const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'myuser',
    password: 'password',
    database: 'mytestdb'
})

function getAllPerson(){
    return new Promise(function(resolve,reject){
        connection.query(
            `SELECT * FROM persons`,
            function(err,rows,cols){
                if(err){
                    reject(err)
                }
                else{
                    resolve(rows)
                }
            }
        )
    })
}

function addNewPerson(){
    return new Promise(function(resolve,reject){
        connection.query(
            `INSERT INTO persons (name,age,city) VALUES (?,?,?)`,
            [name,age,city],
            function(err,results){
                if(err){
                    reject(err)
                }
                else{
                    resolve()
                }
            }
        )
    })
}

exports = module.exports = {
    getAllPerson,
    addNewPerson
} 