//Los booleanos pueden ser true o false. Cualquier comparacion devuelve un booleano
let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false

/*
VALORES VERDADEROS
- Todos los numeros (positivos y negativos) menos cero
- Todos los strings menos string vacio ('')
- Booleano 'true'

VALORES NEGATIVOS
- 0
- 0n
- null
- undefined
- NaN
- '', "", ``, strings vacios
- Booleano 'false'
*/

let primerNombre    //undefined

let vacio = null    //null

//OPERADORES COMPARATIVOS
//Ademas de las comparativas clasicas, existe '===', que comprueba si dos valores
//son iguales tanto en valor como en tipo de dato
console.log(3 === '3')  //false
console.log(3 == '3')   //true, comparacion de valores
console.log(1 == true)  //true
console.log(1 === true) //false, comparacion de valor y tipo de dato
console.log(undefined == null)  //true
console.log(undefined === null) //false
//Se recomienda siempre utilizar '===', a menos que haya una buena razon para utilizar '=='

//OPERADORES LOGICOS
const check = 4 > 3 && 10 > 5 //true && true = true
const check2 = 4 > 3 || 10 < 5 //true || false = true
let check3 = 4 != 3 //true, negacion

//OPERADOR INCREMENTAL
//Puede ser pre-incremento o post-incremento
let contador = 0
console.log(++contador)     //1, pre-incremento
console.log(contador++)     //1, post-incremento
console.log(contador)       //2
//La mayoria de las veces se utiliza post-incremento

//OPERADOR REDUCTOR
let reductor = 0
console.log(--reductor)     //-1, pre-reduccion
console.log(reductor--)     //-1, post-reduccion
console.log(reductor)       //-2

//OPERADORES TERNARIOS
//Permiten escribir condiciones
let estaLloviendo = true
estaLloviendo
    ?   console.log('Vas a necesitar un paraguas')
    :   console.log('Anda tranquilo pa')

estaLloviendo = false
    ?   console.log('Vas a necesitar un paraguas')
    :   console.log('Anda tranquilo pa')

let number = 5
number > 0
      ? console.log(`${number} es positivo`)
      : console.log(`${number} es negativo`)

number = -5
number > 0
      ? console.log(`${number} es positivo`)
      : console.log(`${number} es negativo`)

//JavaScript respeta la precedencia de operadores, lo cual permite escribir
//y entender funciones matematicas como el ser humano lo haria, respetando
//el orden de jerarquia de simbolos
console.log(2 + 3 * 2) //8, el producto se ejecuta antes, pese a estar despues

/*VENTANAS
//La primera, 'alert', muestra una ventana con un mensaje especifico y un boton OK.
//No abusar de las alertas ya que son molestas. Utilizar solo para testear
alert('Wenassss')

//'prompt' muestra un cuadro para ingresar texto, el cual puede ser almacenado
//en una variable
let texto = prompt('Texto requerido', 'Texto opcional')
console.log(texto)

//Para pedir la confirmacion del usuario, se suele utilizar 'confirm'. Esto muestra
//un cuadro con un boton OK y uno CANCEL, los cuales devuelven booleanos
let confirmar = confirm('Confirmar eliminacion de la raza humana')
console.log(confirmar)
*/

//FECHA Y HORA
//Javascript permite trabajar con fechas desde el objeto 'Date', el cual tiene
//sus propias funciones 'get' para obtener datos
const ahora = new Date()
console.log(ahora)
console.log(ahora.getFullYear())
console.log(ahora.getMonth())   //Mes de 0 a 11
console.log(ahora.getDate())
console.log(ahora.getDay()) //Dia de la semana (Domingo = 0, Sabado = 6)
console.log(ahora.getHours())   //Hora de 0 a 23
console.log(ahora.getMinutes())
console.log(ahora.getSeconds())
console.log(ahora.getTime())
console.log(Date.now())     //Igual a getTime()

//EJERCICIOS