function reiniciarJuego(){
            sequenciaPC=[];
            sequenciaPlayer=[];
            ronda=0;
            cambiarEstado("Press Start");
            actualizarRonda("-");  
            actualizarTurno("-");
        }

function empezarJuego(){
            bloquearInput();
            turnoPC();
            let retrasoTurnoPlayer = (sequenciaPC.length + 1)*1000;
            setTimeout(function(){
             turnoPlayer();   
             }, retrasoTurnoPlayer);
             
              
}



function turnoPC(){
    actualizarTurno("PC");
    
    
    let $nuevoCuadro = generarCuadroAleatorio();
    sequenciaPC.push($nuevoCuadro);
    sequenciaPC.forEach(function($cuadro,index){
                
        let retrasoTurnoPC = (index +1) *1000;

        setTimeout(function(){
        resaltarCuadro($cuadro);
        },retrasoTurnoPC);
        });
                        
}

function turnoPlayer(){
    sequenciaPlayer=[];
    desbloquearInput();
    actualizarTurno("Player");
    
    
}

function desbloquearInput(){
    const $cuadros = document.querySelectorAll(".cuadros");
    $cuadros.forEach(function(cuadro){
       cuadro.onclick=inputPlayer;
    });
}

function bloquearInput(){
    const $cuadros = document.querySelectorAll(".cuadros");
    $cuadros.forEach(function(cuadro){
        cuadro.onclick=function(){};
    })}

/*
function manejaRonda(si){
let acierto =+ si;
while (acierto < sequenciaPC.length){

    desbloquearInput();
}
console.log("iguales");
    setTimeout(function()
    {
    empezarJuego();
},1000);
}
*/

function inputPlayer(e){

  

    const $cuadroInput = e.target;
    sequenciaPlayer.push($cuadroInput);
    resaltarCuadro($cuadroInput);
    
    const cuadroPC = sequenciaPC[sequenciaPlayer.length-1];
   
    if (cuadroPC.id !== $cuadroInput.id ){
        bloquearInput();
        cambiarEstado("perdiste! ");
        /*setTimeout(function(){
            reiniciarJuego();}, 1000);*/
        return;
    }


    if (sequenciaPlayer.length === sequenciaPC.length) {
        setTimeout(function(){
            empezarJuego();}, 1000);
            ronda++;
            
            actualizarRonda(ronda);
    }    

    

    

       
    


  
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
