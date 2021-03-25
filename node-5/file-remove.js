const fs= require('fs');

fs.unlink('demoNew.txt',(err)=>{
    if(err){
        console.log(err)
    }
    console.log('File was deleted')
})



