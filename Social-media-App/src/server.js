const Express = require('express')
const {db} = require('./db/models')

const app = Express()

db.sync({force : true}).then(()=>{
    app.listen(8383,()=>{
        console.log('Server started on http://localhost:8383')
    })
}).catch((err)=>{
    console.error(new Error('Could not start server'))
    console.error(err)
})