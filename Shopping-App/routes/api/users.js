const User = require('../../db').User
const route = require('express').Router()

route.get('/', (req,res)=>{
    //We want to send an array of all the users
    //From our Database

    User.findAll()
        .then((users)=>{
            res.status(200).send(users)
        })
        .catch((err)=>{
            res.status(500).send({
                error: 'Could not retrive users'
            })
        })
})

route.post('/', (req,res)=>{
    //We expect the req to have name in it
    //We will create a new user

    User.create({
        name: req.body.name
    }).then((user)=>{
        res.status(201).send(user)
    }).catch((err)=>{
        res.status(501).send({
            error: 'Could not create a new user'
        })
    })
})

exports = module.exports = route