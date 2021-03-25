const fs = require('fs');
// const http= requre('http')




const file = 'mov_bbb.mp4'
const readStream = fs.createReadStream(file);

readStream.on('data',(chunk)=>{
    console.log('a data came in....', chunk.length)
})
readStream.on('end',(chunck)=>{
    console.log(' data reading finished....')
})

