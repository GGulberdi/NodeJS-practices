const fs = require('fs');

//fs.appendFile() = add new ones , fs.writeFile()==  clears preveious ones and adds new ones

fs.appendFile('demoNew.txt', 'Hello Word\n', (error)=>{
        if (error){
            console.log(error)
        }

        console.log('Append Process Finished...')
})

