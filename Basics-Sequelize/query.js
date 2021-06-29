const{db, student} = require("./model")

const task = async() =>{
    try {
        await db.sync()
        const students = await student.findAll()
        students.forEach(student => console.log(student.dataValues))
    } catch (e) {
        console.error(e)
    }
}

task()