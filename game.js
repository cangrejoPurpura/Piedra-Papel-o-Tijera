window.addEventListener('load', iniciarJuego)

function aleatorio (min, max){
    return Math.floor(Math.random() * (max - min +1 ) + min)
}
function iniciarJuego() {
    
    const inputPiedra = document.getElementById('piedra')
    inputPiedra.addEventListener('click', piedra)

    const inputPapel = document.getElementById('papel')
    inputPapel.addEventListener('click', papel)

    const inputTijera = document.getElementById('tijera')
    inputTijera.addEventListener('click', tijera)

    const reiniciar = document.getElementById('reiniciar')
    reiniciar.addEventListener('click', botonReiniciar)
    reiniciar.style.display = 'none'
}

function eleccionCPU (){
    let resultado = aleatorio(0,2)
    return elecciones[resultado];
};

function combate(user, cpu){
    let resultado

    if(user == cpu) {
        resultado = 'empate'
    } else if(user == elecciones[1] && cpu == elecciones [0] || user == elecciones[2] && cpu == elecciones [1] || user == elecciones[0] && cpu == elecciones [2] ){
        resultado = 'ganaste'
        vidaCpu--
    }
     else{
        resultado = 'perdiste'
        vidaUser--
    }
   return resultado 
   
}

function vidas() {
    const vidaJugadores = document.createElement('p')
    const vidas = document.getElementById('vidas')

    vidaJugadores.innerHTML = ` Tienes ${vidaUser} vidas. Cpu tiene ${vidaCpu} vidas.`
    vidas.appendChild(vidaJugadores)
}
const elecciones = ['piedra', 'papel', 'tijera']

function piedra(){
    const sectionCombate = document.getElementById('resultados')
    const combatText = document.createElement('p')
    userElige = elecciones[0]
    cpuElige = eleccionCPU()
    combatText.innerHTML = `Elegiste ${userElige}, CPU eligió: ${cpuElige}. ${combate(userElige, cpuElige)}`
    sectionCombate.appendChild(combatText)
    vidas()
    revisarVidas()
}

function papel() {
    const sectionCombate = document.getElementById('resultados')
    const combatText = document.createElement('p')
    userElige = elecciones[1]
    cpuElige = eleccionCPU()
    combatText.innerHTML = `Elegiste ${userElige}, CPU eligió: ${cpuElige}. ${combate(userElige, cpuElige)}`
    sectionCombate.appendChild(combatText)
    vidas()
    revisarVidas()
}

function tijera() {
    const sectionCombate = document.getElementById('resultados')
    const combatText = document.createElement('p')
    userElige = elecciones[2]
    cpuElige = eleccionCPU()
    combatText.innerHTML = `Elegiste ${userElige}, CPU eligió: ${cpuElige}. ${combate(userElige, cpuElige)}`
    sectionCombate.appendChild(combatText)
    vidas()
    revisarVidas()
}

let userElige
let cpuElige

let vidaUser = 3
let vidaCpu = 3

let inputPiedra
let inputPapel
let inputTijera

function disableGame() {
    inputPiedra = document.getElementById('piedra')
    inputPiedra.disabled = true
    inputPapel = document.getElementById('papel')
    inputPapel.disabled = true
    inputTijera = document.getElementById('tijera')
    inputTijera.disabled = true
}

function revisarVidas() {
    const quienGana = document.getElementById('quien-gana')
    
    if (vidaUser == 0) {
        quienGana.innerHTML = 'Perdiste 😢'
    } else if (vidaCpu == 0) {
        quienGana.innerHTML = 'Ganaste 🎉'
    }

    if (vidaCpu == 0 || vidaUser == 0){
        disableGame()
        reiniciar.style.display = 'block'
    }
}

function botonReiniciar(){
    location.reload()
}