//create function first
function change(event){
    //EVENT OBJECT
    //to get event data bcoz we get event as input
     console.log(event);  

    let fpara=document.getElementById('fpara');

    fpara.textContent="Hello Prakhar"
    
}//get the one on which to be applied
let fpara=document.getElementById('fpara');
//apply the function
fpara.addEventListener('click',change);
//fpara.removeEventListener('click',change);
