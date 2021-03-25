const events=require('events');

const eventEmitter = new events.EventEmitter();

//create an event//
eventEmitter.on('sayName', function(){
    console.log('My name : Gulsenem')
});

//create an event//
eventEmitter.once('sayName', function(text){
    console.log('My name : Gulsenem', text)
});
//Trigger an event//

eventEmitter.emit('sayName', 'housewife');

//Trigger an event with interval//
setInterval(() => {
eventEmitter.emit('sayName')}, 2000);