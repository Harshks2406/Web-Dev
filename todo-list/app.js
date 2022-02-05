const express = require("express");
const app = express()
const port = process.env.PORT | 2424
const path = require('path')

const static_Path = path.join(__dirname,'public')

app.use(express.static(static_Path))

app.get('/',(req,res)=>{
    res.send(index)
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})