function aleatorio (min, max){
    return Math.floor(Math.random() * (max - min +1 ) + min)
}

function eleccion (jugada){
    let resultado = '';
    if (jugada == 1){
        resultado = 'Elegiste 🥌'
    } else if (jugada == 2){
        resultado = 'Elegiste 🧻'
    } else if (jugada == 3){
        resultado = 'Elegiste ✂'
    } else{
        resultado = 'Elegiste PERDER😧'
    }
    return resultado;
};

function eleccionCPU (jugada){
    let resultado = '';
    if (jugada == 1){
        resultado = 'Elegiste 🥌'
    } else if (jugada == 2){
        resultado = 'Elegiste 🧻'
    } else if (jugada == 3){
        resultado = 'Elegiste ✂'
    } 
    return resultado;
};

function combate (user, cpu){
    let resultado = '';
    if (user == 2 && cpu == 1||user == 1 && cpu == 3 ||user == 3 && cpu == 2){
        resultado = 'ganaste'
    }  else {
        resultado = 'perdiste'
    }
    return resultado;
};

let user = prompt('Elije:\n1 - piedra \n2 - papel\n3 - tijera');
let cpu = aleatorio(1,3);

//ELECCIÓN 
alert('Elegiste: ' + eleccion(user));
alert('El CPU eligió: ' + eleccionCPU (cpu));

//COMBATE
alert(combate(user, cpu));

console.log('player eligió: ' + user)
console.log('cpu eligió: ' + cpu);