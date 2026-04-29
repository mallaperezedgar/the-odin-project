console.log('hola');

const contenedorGrid = document.querySelector('.contenedorGrid');



// creacion de divs por defecto

for(i =0;i<256;i++){

const div = document.createElement('div');
div.classList.add('celda');
contenedorGrid.appendChild(div);

div.addEventListener('mouseover', sombreadoCuadricula);

}



//funcion de sombreado

function sombreadoCuadricula(evento){

evento.target.style.backgroundColor ='black';

 const celda = evento.target;

    // si no tiene opacidad todavía, la inicializamos
    if (!celda.style.opacity) {
        celda.style.opacity = 0;
    }

    // sumamos 0.1
    let opacidad = parseFloat(celda.style.opacity);
    opacidad += 0.1;

    // no pasarse de 1
    if (opacidad > 1) opacidad = 1;

    celda.style.opacity = opacidad;

}


//funcion de cambio de cuadriculas a otros tipos
function cambioCuadriculas(){
    contenedorGrid.innerHTML="";
    const valorCuadricula=document.getElementById('selectorCuadricula')
    const n = Number(valorCuadricula.value);
    const tamañoCelda = 800 / n;

    console.log(n);

    for(i =0; i < n*n ;i++){

    const div = document.createElement('div');
    div.classList.add('celda');

    div.style.width = tamañoCelda + "px";
    div.style.height = tamañoCelda + "px";
    contenedorGrid.appendChild(div);

    div.addEventListener('mouseover', sombreadoCuadricula);

}


    
}






