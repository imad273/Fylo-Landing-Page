// Variable
var btnTop = document.getElementById("btn-top");
var nav = document.getElementById("nav");
var menuIcon = document.getElementById("humb");
var closeBtn = document.getElementById("close");



window.onscroll = function(){
    if(pageYOffset >= 400){
        btnTop.style.display = "block";
    } else{
        btnTop.style.display = "none";

    }
}

btnTop.addEventListener("click", (event) =>{
    scrollTo(0,0)
})


menuIcon.addEventListener("click", (event) =>{
    nav.style.width = "100%"
})
closeBtn.addEventListener("click", (event) =>{
    nav.style.width = "0%"
})