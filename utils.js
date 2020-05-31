function reiniciarJuego(){
    sequenciaPC=[];
    sequenciaPlayer=[];
    ronda=0;
}


function empezarJuego(){
    actualizarTurno("PC");
    let $nuevoCuadro = generarCuadroAleatorio();
    sequenciaPC.push($nuevoCuadro);

    //let retrasoTurnoPlayer = (sequenciaPC.length + 1)*1000;

    sequenciaPC.forEach(function($cuadro,index){
                
        let retrasoTurnoPC = (index +1) *1000;

        setTimeout(function(){
            resaltarCuadro($cuadro);
            },retrasoTurnoPC);
    
    });
   
}

function generarCuadroAleatorio(){
    const $cuadro = document.getElementsByClassName('cuadros');
    let indice = Math.floor(Math.random() * $cuadro.length);
    return $cuadro[indice];
    
}


function resaltarCuadro(cuadro){
 
    cuadro.style.opacity=1;
    
    setTimeout(function() {
        
        cuadro.style.opacity = 0.5;
      }, 500);  
}

function actualizarTurno(turno){
const $turno = document.getElementById("hud-turno");
$turno.innerText="Turno: " + turno;
}
function cambiarEstado(estado){
    let $estado=document.getElementById("estado");
    $estado.innerText=estado;
}

function actualizarRonda(numeroRonda){
let $ronda=document.getElementById("hud-ronda");
$ronda.innerText="Ronda " + numeroRonda;
}

function bloquearInput(){

}