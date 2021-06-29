 let inpCode = document.getElementById('inpCode')
 let btnEncode = document.getElementById('btnEncode')
 let encrypt = document.getElementById('encrypt')

 let code = document.getElementById('code')

 btnEncode.onclick = function(){
     let data = inpCode.value
     data= btoa(data)
     code.value = data
 }
 encrypt.onclick = function(){
     let data = code.value 
     data = encryptData(data)
     code.value = data
 }

 function encryptData(rawData){
    let ln = rawData.length
    let n
    console.log(ln)
    for(let i=0;i<ln;i++){
        if (rawData[i] >= 'a' && rawData[i] <= 'z'){
            newRaw = rawData.charCodeAt(i)-32
            n = rawData.replace(rawData[i],String.fromCharCode(newRaw))
            rawData = n
        }
        else if (rawData[i] >= 'A' && rawData[i] <= 'Z'){
            newRaw = rawData.charCodeAt(i)+32
            n = rawData.replace(rawData[i],String.fromCharCode(newRaw))
            rawData = n
        }
    } 
    return rawData
 }