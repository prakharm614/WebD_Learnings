document.addEventListener("DOMContentLoaded",function()){
   
    const searchbutton = document.getElementById("search");
    const username = document.getElementById("userinput");
    const statscontainer = document.getElementById(".statscontainer");
    const easycircle = document.getElementById(".easyprogress");
    const mediumcircle = document.getElementById(".mediumprogress");
    const hardcircle = document.getElementById(".hardprogress");
    const easylabel = document.getElementById("easylabel");
    const mediumlabel  = document.getElementById("mediumlabel");
    const hardlabel = document.getElementById("hardlabel");
    const cardstatscontainer = document.getElementById(".statscards");

//return true or false based on a reg expression
    function  validateusername(username){
        if(username.trim()==""){
            alert("Username should not be empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const ismatching=regex.test(username);
        if(!(ismatching){
            alert("Invalid Username")
        })
        return ismatching;
    }

    async function fetchuserdetails(username) {
        try{
            searchbutton.textContent="Searching...";
            searchbutton.disabled=true;
       //for leetcode to respond to local server use demo server
       const proxyurl='https://cors-anywhere.herokuapp.com/'
        const targeturl='https://leetcode.com/graphql'
        const myheaders= new Headers();
        myheaders.append("content-type","application/json");
        
        const graphql = JSON.stringify({
           // query: "\n q    uery userSession ......"
        })
        const requestoptions = {
            method : "POST",
            Headers: myheaders,
            body:graphql,
            redirect:"follow"
        };
        const response=await fetch(proxyurl+targeturl, requestoptions);
          
        
           // const response= await fetch(url);
            if(!response.ok){
                throw new Error("Unable to fetch user details");

            }
            const data = await response.json();
            //console.log("Logging data :",data);
            displayuserdata(data);
        }
        catch(error){
            statscontainer.innerHTML= '<p> No data Found<p>'
        }
        finally{
            searchbutton.textContent="Search";
            searchbutton.disabled= false;
        }
    }

    function displayuserdata(data){
        
    }
    searchbutton.addEventListener('click',function(){
        const username=username.value;
        //console.log("name is :", username)
        if(validateusername(username)) {
           fetchuserdetails(username);

        }


    })
}