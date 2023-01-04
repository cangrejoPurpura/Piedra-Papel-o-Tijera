function aleatorio (min, max){
    return Math.floor(Math.random() * (max - min +1 ) + min)
}

function eleccion (jugada){
    let resultado = '';
    if (jugada == 1){
        resultado = '🥌'
    } else if (jugada == 2){
        resultado = '🧻'
    } else if (jugada == 3){
        resultado = '✂'
    } else{
        resultado = 'Elegiste PERDER😧'
    }
    return resultado;
};

function eleccionCPU (jugada){
    let resultado = '';
    if (jugada == 1){
        resultado = '🥌'
    } else if (jugada == 2){
        resultado = '🧻'
    } else if (jugada == 3){
        resultado = '✂'
    } 
    return resultado;
};

function combate(){
    let vidaUser = 0;
    let vidaCPU = 0;

    while (vidaUser < 3 && vidaCPU < 3){
        let user = prompt('Elije:\n1 - piedra \n2 - papel\n3 - tijera');
        let cpu = aleatorio(1,3);

        alert('Elegiste: ' + eleccion(user));
        alert('El CPU eligió: ' + eleccionCPU (cpu));

        if (user == 2 && cpu == 1||user == 1 && cpu == 3 ||user == 3 && cpu == 2){
            resultado = 'ganaste';
            vidaUser = vidaUser + 1;
        } else if(user == cpu){
            resultado = 'empate'        
        } else{
            resultado = 'perdiste';
            vidaCPU = vidaCPU + 1;
        }
        alert(resultado);
    }
    alert('Ganaste ' + vidaUser + ' veces.' + 'Perdiste ' + vidaCPU + ' veces.') 
}

combate();