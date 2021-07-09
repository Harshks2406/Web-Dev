const {Users} = require("../db/models")

const {genRandomUsername} = require('../utils/username')

async function createAnonUser(){

    const user = await Users.create({
        username : genRandomUsername()
    })

    return user
}

module.exports = {
    createAnonUser
}