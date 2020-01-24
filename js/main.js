var model = document.getElementById("signUpBox");
var btn = document.getElementById("signUp");
var span = document.getElementsByClassName("close")[0];
var success = document.getElementById("success");

btn.onclick = function(){
    model.style.display = "block";
}

span.onclick = function(){
    model.style.display = "none";
}

success.onclick = function(){
    model.style.display = "none";
    alert("Sign Up Complete!");
}

window.onclick = function(event){
    if(event.target == model){
        model.style.display = "none";
    }
}