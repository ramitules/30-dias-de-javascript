//CONDICIONALES IF ELSE
let num = 3

if (num > 0) {
    console.log(`${num} es positivo`)
} else {
    console.log(`${num} es negativo o cero`)
}

//ANIDAR CONDICIONALES
let clima = 'Soleado'

if (clima == 'Nublado') {
    console.log(`${clima}, ojo la lluvia`)
} else if (clima == 'Lloviendo') {
    console.log(`${clima}, lleva paraguas`)
} else {
    console.log(`${clima}, gorrita tranqui`)
}

//SWITCHES, alternativa a anidar condicionales
switch(true) {
    case num > 0:
        console.log(`${num} es positivo`)
        break
    case num < 0:
        console.log(`${num} es negativo`)
        break
    case num == 0:
        console.log(`${num} es cero`)
        break
    default:
        console.log(`${num} no tengo idea que es`)
}

//OPERADORES TERNARIOS (bool)
let soyReFachero = false
soyReFachero
    ?   console.log('mas vale pa')
    :   console.log('yyyy la verdad que no')