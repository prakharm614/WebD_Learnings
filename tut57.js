// async function getdata() {
//   setTimeout(function () {
//     console.log("I am inside set Timeout block");
//   }, 3000);
// }
// getdata();

// AWAIT

//fetch api
async function getdata() {
    //et request ->async
    let response= await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //parse json data ->async

    let data= await response.json();
    // sync actions 
    console.log(data);
    
    console.log(response);

    
}

//scenarios:
//           prepare URL/api endpoint -> synchronus
//await  ->  fetch data -> network call ->async
//           proces data ->sync

