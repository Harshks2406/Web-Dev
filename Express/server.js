const express  = require("express")
const app = express()
app.use(express.urlencoded({extended: true}))

app.get('/', (req , res) => {
    res.send('<h1 style = "color : red "> Hello world </h1>')
})

app.get('/greet', (req, res)=>{
    let person = 'Guest'
    if(req.query.person){
        person = req.query.person
    }
    console.log(req.query)
    res.send("Good Morning " + person)
})

app.post('/greet', (req, res)=>{
    let person = 'Guest'
    if(req.body.person){
        person = req.body.person
    }
    console.log(req.query)
    res.send("Good Evening " + person)
})



app.get('/form', (req, res) =>{
    res.sendFile( "/web/Express/server.html")
})

app.listen(4444, () =>{
    console.log('server started on http://localhost:4444')
}) 