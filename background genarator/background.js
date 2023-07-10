
const color_1 =document.querySelector(".color_1");
const color_2= document.querySelector(".color_2");
const css = document.querySelector("h3");
const body = document.getElementById("gradiant");



function gradiantChange(){
    body.style.background ="linear-gradient(to right ,"+
    color_1.value+ "," + color_2.value + ")" ;
    css.textContent = body.style.background+ ";";

}

color_1.addEventListener("input", gradiantChange);
color_2.addEventListener("input", gradiantChange);