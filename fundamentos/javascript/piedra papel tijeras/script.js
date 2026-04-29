


//funcion eleccion de jugador
function eleccionJugador(){
const eleccion = prompt('que eliges?');
if (eleccion == "piedra"){
    return "piedra"; 
}
if (eleccion == "tijeras"){
    return "tijeras"; 
}
if (eleccion == "papel"){
    return "papel"; 
}

}

//funcion eleccion de la maquina

function eleccionMaquina(){
 const numero = Math.floor(Math.random() * 3) + 1;

 
if(numero === 1){
    return "piedra";
}
if(numero === 2){
    return "papel";
}
if(numero === 3){
    return "tijeras";
}

}


//funcion de ronda usando las funciones anteriores

function quienGana(eleccionMaquina, eleccionJugador){

if(eleccionMaquina === "tijeras" && eleccionJugador === "papel"){
    return "gana maquina"
}
if(eleccionMaquina === "tijeras" && eleccionJugador === "piedra"){
    return "gana jugador"
}
if(eleccionMaquina === eleccionJugador){
    return "empate"
}
if(eleccionMaquina === "papel" && eleccionJugador === "tijeras"){
    return "gana jugador"
}
if(eleccionMaquina === "papel" && eleccionJugador === "piedra"){
    return "gana maquina"
}
if(eleccionMaquina === "piedra" && eleccionJugador === "papel"){
    return "gana jugador"
}
if(eleccionMaquina === "piedra" && eleccionJugador === "tijeras"){
    return "gana maquina"
}



}






// funcion para jugar a 5 rondas

function Juego(quienGana){

   
    let  resultadoJugador= 0;
    let resultadoMaquina =0;
    

for(let ronda =0 ; ronda<5; ronda++){
    let jugador = eleccionJugador();
    let ordenador = eleccionMaquina();
    console.log(jugador,ordenador);
    let resultadoRonda =quienGana(ordenador,jugador);


    if(resultadoRonda==="gana jugador"){
        resultadoJugador++;
    }
    if(resultadoRonda==="gana maquina"){
        resultadoMaquina++;
    }


    }
//comparador de puntuacion 

    if(resultadoJugador > resultadoMaquina){
        console.log(" jugador gana la partida")
    }else if(resultadoMaquina >resultadoJugador){
       console.log("maquina gana la partida ") 
    }else{
       console.log("empate") 
    }
        
    }


    


   








/** 
console.log(jugador);
console.log(ordenador);
console.log(quienGana(ordenador, jugador));
*/
console.log(Juego(quienGana));

 


