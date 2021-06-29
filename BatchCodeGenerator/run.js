const {db} = require('./model')
const {app} = require('./server')

const start = async () =>{
    try {
        await db.sync();

        app.listen(3131,(req,res)=>{
            console.log('Server started at http://localhost:3131')
        })
    } catch (e) {
        console.error(e)
    }
}

start()