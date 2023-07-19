//encapsulate async op 2 part producing and consuming;
const promise = new Promise((resolve,reject)=> {
    let fileLoaded = false;
    if(fileLoaded){
        resolve("yes");
    }
    else{
        reject("no");
    }
});

promise.then(value => console.log(value))
.catch(error=>console.log(error));

