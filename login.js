

let data=JSON.parse(localStorage.getItem("data")) || []


document.querySelector("form").addEventListener("submit",login)


function login(event){
    event.preventDefault();
    let enteredemail=document.getElementById("email").value
    let enteredname=document.getElementById("pass").value




    for(let key of data){
        if(key.email==enteredemail  && key.pass==enteredname){
            alert("login successful");
            window.location.reload=true;
            break;
        }if(key.email!=enteredemail  || key.pass!=enteredname){
            alert("wrong email or password")
            break;
        }
    }
    

    
}


