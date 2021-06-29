const express = require('express')
const app = express()

app.use('/', express.static (__dirname + "/public"))

function decodeQueryBase64(req,res,next){
    for(let q in req.query){
        let data = req.query[q]
         data = new Buffer.from(data, 'base64').toString('ascii')
        req.query[q] = data
        console.log(data)
    }
    next()
}

function encryptData(req,res,next){
    let ln = req.query.code.length
    newcode = req.query.code
    let n
    console.log(ln)
    for(let i=0;i<ln;i++){
        if (newcode[i] >= 'a' && newcode[i] <= 'z'){
            newRaw = newcode.charCodeAt(i)-32
            n = newcode.replace(newcode[i],String.fromCharCode(newRaw))
            newcode = n
        }
        else if (newcode[i] >= 'A' &&newcode[i] <= 'Z'){
            newRaw =newcode.charCodeAt(i)+32
            n = newcode.replace(newcode[i],String.fromCharCode(newRaw))
            newcode = n
        }
    } 
    code = newcode
    next()
}

app.get('/eval', encryptData, decodeQueryBase64,(req,res)=>{
    let newdata = eval(req.query.code)
    res.send(newdata)
})

app.listen(4567,()=>{
    console.log("Server started at http://localhost:4567")
})