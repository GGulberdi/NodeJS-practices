const fs = require('fs');

let progress = 0;
const file = 'mov_bbb.mp4'
const myReadStream = fs.createReadStream(file)

fs.stat(file,(err,data)=>{
    const total = data.size;
    myReadStream.on('data',(chunk)=>{
        progress += chunk.length
        console.log(Math.round((progress*100)/total)+'%')
    })
    myReadStream.on('end',()=>{
        console.log('Data read finished....')
    })
})

