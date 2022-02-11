var block = document.getElementById("block");
var block = document.getElementById("hole");

hole.addEventListener('animationiteration', ()=>{
    var random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
})