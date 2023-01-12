function aleatorio (min, max){
    return Math.floor(Math.random() * (max - min +1 ) + min)
}

c

function eleccionCPU (){
    let resultado = aleatorio(0,2)
    return elecciones[resultado];
};

const elecciones = ['piedra', 'papel', 'tijera']

function combate(){
    let vidaUser = 0;
    let vidaCPU = 0;

    while (vidaUser < 3 && vidaCPU < 3){
        let user = prompt('Elije:\n1 - piedra \n2 - papel\n3 - tijera');
        
        let cpu = eleccionCPU();

        alert('Elegiste: ' + eleccion(user));
        alert('El CPU eligió: ' + cpu);

        if (user == 2 && cpu == 'piedra'||user == 1 && cpu == 'tijera' ||user == 3 && cpu == 'papel'){
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

combate()