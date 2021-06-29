const {Center,Season,Teacher,Course,Batch} = require('./model')
const {db} = require('./connect')

const seed = async() =>{
    try {
        db.sync({alter : true})
        await Center.bulkCreate([
            { id: 'PP', name: 'Pritampura', city: 'New Delhi'},
            { id: 'DW', name: 'Dwarka', city: 'New Delhi'},
            { id: 'NO', name: 'Noida', city: 'Noida'},
            { id: 'DD', name: 'Dehradun', city: 'Dehradun'},
            { id: 'OL', name: 'Online', city: 'New Delhi'}

        ],{
            ignoreDuplicates: true
        })

        await Season.bulkCreate([
            {id : 'S', name: 'Summer'},
            {id : 'F', name: 'Fall'},
            {id : 'W', name: 'Winter'},
            {id : 'SP', name: 'Spring'},
        ],{
            ignoreDuplicates: true
        })

        await Course.bulkCreate([
            {id: 'Lp', name : 'Launchpad'},
            {id: 'CX', name : 'Crux'},
            {id: 'IB', name : 'Interview Bootcamp'},
            {id: 'AD', name : 'Android Development'},
            {id: 'WD', name : 'Web Development'},
        ],{
            ignoreDuplicates: true
        })
    } catch (e) {
        console.error(e)
    }
}

seed()