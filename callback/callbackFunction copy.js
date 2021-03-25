// CALBACK FUNCTION

function sayHi(text, callback) {
    setTimeout(() => {
    console.log(text)
        callback()
    }, 2000);
    
}


function sayBue() {
    console.log('Bye.......')
    
}

sayHi('Hello Gulsenem', sayBue)
// sayBue()
