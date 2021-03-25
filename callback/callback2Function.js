// CALBACK FUNCTION

function sayHi(callback) {
    setTimeout(() => {
        console.log('Hi Gulsenem.....')
        callback()
    }, 2000);
}


function sayBue() {
    console.log('BYE')
    sayBue()    
}


function welcome() {
    console.log('Welcome.....')
    
}


sayHi(welcome)
welcome()
sayBue()

// sayBue()
