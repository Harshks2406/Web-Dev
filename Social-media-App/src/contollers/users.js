const {Users} = require("../db/models")

const {genRandomUsername} = require('../utils/username')

async function createAnonUser(){

    const user = await Users.create({
        username : genRandomUsername()
    })

    return user
}

async function getUserById(id){
    return await Users.findOne({where : {id}})
}

async function getUserByUserName(username){
    return await Users.findOne({where : {username}})
}

module.exports = {
    createAnonUser,
    getUserById,
    getUserByUserName
}