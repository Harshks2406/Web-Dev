function download(url){
    return new Promise(function(resolve, reject){
        if(!url.startsWith("http")){
            reject(new Error("Url does not exist."))
        }
        else{
            setTimeout(function(){
                let fileName = url.split("/").pop()
                console.log(fileName)
                resolve(fileName)
            },10000)
        }
    })
}

function resize(fileName){
    return new Promise(function(resolve, reject){
        if(!fileName.endsWith(".png")){
            reject(new Error("File is not supported."))
        }
        else{
            setTimeout(function(){
                let resizedFIle = fileName.split(".")[0]+ "-resized.png"
                console.log(resizedFIle)
                resolve(resizedFIle)
            },3000)
        }
    })
}

function upload(resizedFIleName){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            let uploadedUrl = "http://img.com/" + resizedFIleName
            resolve(uploadedUrl)
        },3000)
    })
}

function uploadedUrl(uploadedUrl){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("File was uploaded to: "+ uploadedUrl)
        },3000)
    })
}

download("http://cb.lk/logo.png")
    .then(resize)
    .then(upload)
    .then(uploadedUrl)
    .catch(function(err){
        console.log(err)
    })
