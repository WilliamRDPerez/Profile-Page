function addShadow (element){
    element.classList.add("shadow");
}

function removeShadow (element){
    element.classList.remove("shadow");
}

var count=7;
var countElement = document.querySelector("#connectionamount");

function addFriend(){
    count=count+1;
    countElement.innerText= count + "+";
}

function decline(element){
    var element = document.getElementById("request1");
    element.remove();
}

function decline2(element){
    var element = document.getElementById("request2");
    element.remove();
}

function editprofile(element){
    var element = document.getElementById("name");
    element.innerText = "William P";
}