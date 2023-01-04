function aleatorio (min, max){
    return Math.floor(Math.random() * (max - min +1 ) + min)
}

let user = prompt('Elije:\n1 - piedra \n2 - tijera\n3 - papel');

cpu = aleatorio(1,3);


if (user == 1){
    opcion = 'Elegiste piedra'
    alert(opcion);
}
if (user == 2){
    opcion = 'Elegiste papel'
    alert(opcion);
}
if (user == 3){
    opcion = 'Elegiste tijera'
    alert(opcion);
} 

if (cpu == 1){
    opcion = 'CPU elige piedra'
    alert(opcion);
}
if (cpu == 2){
    opcion = 'CPU elige papel'
    alert(opcion);
}
if (cpu == 3){
    opcion = 'CPU elige tijera'
    alert(opcion);
} 


if (user == 1 && cpu == 2){
    alert('perdiste')
}
if (user == 2 && cpu == 3){
    alert('ganaste')
}
if (user == 2 && cpu == 1){
    alert('ganaste')
}
if (user == 3 && cpu == 1){
    alert('perdiste')
}
if (user == 3 && cpu == 2){
    alert('perdiste')
}
if (user == 1 && cpu == 3){
    alert('ganaste')
}
if (user == cpu){
    alert ('empate')
}

console.log('player eligió: ' + user)
console.log('cpu eligió: ' + cpu);