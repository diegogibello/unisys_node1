const fs = require('fs')
const file = "/data.json"
fs.readFile(file, (error, data) =>{
    if(error) {
        console.error(error)
        return
    }
    
})