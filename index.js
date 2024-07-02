const celular = document.getElementById("comcell");
const poxa = document.getElementById("contraporras");

var x = 0;

poxa.addEventListener("click" , e=>{
    if(x == 0){
        celular.style.pointerEvents = "auto";
     
        celular.style.opacity = "1";
        x = 1;       
} else{
    celular.style.pointerEvents = "none";
    celular.style.opacity = "0"; 
    x = 0;
}})
