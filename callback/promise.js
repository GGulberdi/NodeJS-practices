const viewNumber=()=>{
    return new Promise((resolve,reject)=>{
resolve('2 Very Nice');
    })
}

viewNumber()
.then((data)=>{console.log(data); return 1;})
.then((data)=>{console.log(data); return 2;})
.then((data)=>{console.log(data); return 3;})
    