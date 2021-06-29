const express = require('express')
const app = express()
app.use(express.urlencoded({extended: true}))
app.set("view engine" , "hbs")

let Task= []


app.get('/',(req,res)=>{
    let taskList = Task.map(t => `<li>${t}</li>`).join('\n')
    res.render('home' , {
        title : 'Todo List',
        Task
    })
    // res.send(`
    // <html>
    // <body>
    //     <form action="/" method="POST">
    //         <input name="newTask">
    //         <button type="submit">Add</button>
    //     </form>
    //     <ul>${taskList}</ul>
    // </body>
    // </html>
    // `)
})

app.post('/', (req,res) =>{
    Task.push(req.body.newTask)
    res.redirect('/')
} )

app.listen(5555,() =>{
    console.log("server started")
})