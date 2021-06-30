const Product = require('../../db').Product
const route = require('express').Router()

route.get('/', (req,res)=>{
    //We want to send all the products listed so far.
    //From our Database

    Product.findAll()
        .then((products)=>{
            res.status(200).send(products)
        })
        .catch((err)=>{
            res.status(500).send({
                error : 'Could not retreive products'
            })
        })
})


route.post('/',(req,res)=>{
    //Validate the price value

    if(isNaN(req.body.price)){
        return res.status(403).send({
            error: 'Price is not valid.'
        })
    }

    Product.create({
        name : req.body.name,
        manufacturer : req.body.manufacturer,
        price : parseFloat(req.body.price)
    })
    .then((product)=>{
        res.status(201).send(product)
    })
    .catch((err)=>{
        res.status(501).send({
            error : 'Could not create a new product'
        })
    })
})

exports = module.exports= route