const $estadoJuego = document.getElementById("mensaje-estado");
$estadoJuego.innerText = "Empezar";

const $botonEmpezarJuego=document.getElementById("empezar-juego");
$botonEmpezarJuego.onclick=function(){
    $estadoJuego.innerText="Turno PC";

}