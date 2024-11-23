 let src={
    age:12,
    wt:30,
    ht:45
 };
 let dest={...src}; //cloned in dest

 src.age=24;
 console.log(src);
 console.log(dest);

 let dest2=object.assign({},src);
 console.log(dest2);

 src.wt=45;

 let dest3={};
 for(let key in src){
    let newKey=key;
    let newValue=src[key];
    //insert newky and value in dest and create a clone
   dest3[newKey]=newValue;

}
console.log(dest3); 