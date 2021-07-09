const { Router} = require('express')
const route = Router()

route.get('/',(req,res)=>{
    res.send('ALL POSTS')
})

module.exports = {
    postsRoute: route
}