// Variable
var btnTop = document.getElementById("btn-top");
var nav = document.getElementById("nav");



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


document.getElementById("humb").addEventListener("click", (event) =>{
    nav.style.width = "100%"
})
document.getElementById("close").addEventListener("click", (event) =>{
    nav.style.width = "0%"
})