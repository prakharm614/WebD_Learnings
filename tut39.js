
//console.log("Hello world")
// let greet= function(){
//     console.log("Greetings for the day");
// }
// greet();

function solve(number){
    return function(number){
        return number*number;
    }
}
let ans= solve(5);
let finalans=ans(10);
console.log(finalans);