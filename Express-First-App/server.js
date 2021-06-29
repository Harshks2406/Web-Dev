const express = require('express')
const app = express()

app.get('/hello' , (req,res)=>{
    let name = 'Guest'
    if(req.query.user){
        name = req.query.user
    }
    res.send('Hello ' + name + ",how are you?")
})


app.use('/xyz', express.static(__dirname +'/public'))


app.listen(4321, ()=>{
    console.log("Server started on http://localhost:4321")
})

