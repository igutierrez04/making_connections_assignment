console.log("loading page...")

var profilePic = document.querySelector("#profile-pic");
var tittle = document.querySelector("#title");

function change(){
    profilePic.src = "images/danny_fenton.jpg";
    tittle.innerText = "Danny Fenton";
}

var requestNum = document.querySelector("#request-num");
var connectionsNum = document.querySelector("#connections-num");

function accept(id){
    var request = document.querySelector(id);
    request.remove();
    requestNum.innerText--;
    connectionsNum.innerText++;
}

function deny(id){
    var request = document.querySelector(id);
    request.remove();
    requestNum.innerText--;
}