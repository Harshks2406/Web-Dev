const{db, student} = require("./model")

const task = async() =>{

    try {
        await db.sync({alter: true})

        for(let i=0 ; i<5; i++){
            await student.create({
            name : (['Harsh','Ron', 'Harris', 'Broad'])[parseInt(Math.random()*10)],
            age: 10+ parseInt(Math.random()*10 )
        })
    }
        
    } catch (e) {
        console.error(e)
    }
}

task()