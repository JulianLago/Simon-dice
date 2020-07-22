



const $boton = document.getElementById("btn-play");
$boton.onclick=function(){
    
    reiniciarJuego();
    
    cambiarEstado("");
    
    empezarJuego();

}

let $contenedor = document.getElementById('contenedor');
$contenedor.draggable();