//promises in js
let promise1=new promise((resolve,reject) =>{
    let success=true;
    if(success){
        resolve("promise fulfilled");

    }
    else {
        reject("promise rejected");
    }
});
promise1.then((message)=>{
    console.log("first msg: "+ message);
    return "promise fulfilled"
}).then((message)=>{
    console.log( "third message: " + message);
    return "promise fulfilled third msg";
}).then((message) => {
 console.log("third message :" + message);
}).catch((error)=>{
    console.error(error);
}).finally((message)=>{
    console.log("i will always run");
})