let sequenciaPC=[];
let sequenciaPlayer=[];
let ronda = 0;
cambiarEstado("Press Start");
actualizarRonda("-");



const $boton = document.getElementById("boton");
$boton.onclick=function(){
   
    
    empezarJuego();
    cambiarEstado(""); 
    

}