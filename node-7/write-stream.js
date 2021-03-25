const fs = require('fs');

const file = 'mov_bbb.mp4'
const myReadStream=fs.createReadStream(file)
const myWritestreeam = fs.createWriteStream('VideoNew.mp4');
myReadStream.pipe(myWritestreeam);
myWritestreeam.on('finish', ()=>{
    console.log('New file created...')
})