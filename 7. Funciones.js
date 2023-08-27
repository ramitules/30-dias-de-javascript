//DECLARACION DE FUNCION
function cuadrado() {
    let num = 2
    let cuadrado = num * num
    console.log(cuadrado)
}

cuadrado() //retorna 'undefined'

//FUNCION CON RETORNO
function cuadradoRet() {
    let num = 2
    let cuadrado = num * num
    return cuadrado
}

console.log(cuadradoRet()) //retorna numero

//FUNCION CON PARAMETROS
function nombreCompleto (nombre, apellido) {
    let full = `${nombre} ${apellido}`
    return full
}

console.log(nombreCompleto('Ramiro', 'Tules')) //retorna string

//FUNCION CON PARAMETROS ILIMITADOS
//Se utiliza el objeto 'arguments' para iterar dentro de los parametros
function sumarTodo() {
    let suma = 0
    for (i = 0; i < arguments.length; i++) {
        suma += arguments[i]
    }
    return suma
}

console.log(sumarTodo(1, 2, 3, 4, 5, 6, 99))

//ARROW CON PARAMETROS ILIMITADOS
//Se utiliza un operador spread (...)
const sumarTodoArrow = (...args) => {
    let suma = 0
    for (const item of args) {
        suma += item
    }
    return suma
}

console.log(sumarTodoArrow(1, 2, 3, 4, 5, 6, 99))

//FUNCION ANONIMA
const funcionAnon = function() {
    console.log('Valores almacenados en la funcion')
}

funcionAnon()

//FUNCION ANONIMA EXPRESADA
const cubo = function(n) {
    return n * n
}

console.log(cubo(3))

//FUNCION ANONIMA AUTOINVOCADA
let numeroCuadrado = (function (n) {
    return n * n
})(10)

console.log(numeroCuadrado)

//FUNCION FLECHA (arrow function)
const area = (radio) => {
    let area = Math.PI * radio * radio
    return area
}
console.log(area(3))

const cuadradoFlecha = n => n * n

console.log(cuadradoFlecha(6))

//FUNCION CON PARAMETROS POR DEFECTO
function bienvenida(nombre = 'Ramiro') {
    let mensaje = `Bienvendio ${nombre}, pasala piola`
    return mensaje
}

console.log(bienvenida('Gaston'))

const bienvenidaFlecha = (nombre = 'Ramiro') => `Bienvenido ${nombre}, pasala piola`
console.log(bienvenidaFlecha('Gaston')) //Mismo resultado