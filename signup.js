let form=document.querySelector("form")
form.addEventListener("submit",signupFun)

let arr=JSON.parse(localStorage.getItem("data")) || []
function signupFun(event){
   event.preventDefault();
   let obj={
      email:document.getElementById("email").value,
      name:document.getElementById("name").value,
      pass:document.getElementById("pass").value
   }
   arr.push(obj)
   localStorage.setItem("data",JSON.stringify(arr))
   alert("signup successful")
}