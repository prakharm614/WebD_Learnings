//closures in js
let name="outer name"
function outer(){
    
    let name="Prakhar"; //let ->block scoped;
    function inner(){
        let name="nearest name"
        console.log(name);
    }
    inner();

}
outer();