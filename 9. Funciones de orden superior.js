//Una funcion de orden superior es una funcion que toma otra funcion como parametro,
//o retorna otra funcion como valor. La funcion como parametro se la llama callback.

//Funcion como parametro
const callback = (n) => {
    return n**2
}

function cubo(call, n){
    return call(n) * n
}

console.log(cubo(callback, 3))

//Funcion como retorno
const ordenSuperior = n => {
    const ordenInferior = m => {
        const funcionInterna = t => {
            return 2 * n + 3 * m + t
        }
        return funcionInterna
    }
    return ordenInferior
}

console.log(ordenSuperior(2)(3)(10))

//TIEMPO
//Se pueden programar ciertas tareas con intervalos de tiempo o podemos programar una tarea.
//setInterval realiza cierta accion continuamente en cierto intervalo de tiempo
//Toma como parametros una funcion callback y una duracion en milesimas de segundos

function callback2() {
    console.log('Holaa')
}

//setInterval(callback2, 1000) //"Holaa" cada 1 segundo

//setTimeout es un temporizador. Se ejecuta despues de X cantidad de milisegundos

setTimeout(callback2, 2000)

//PROGRAMACION FUNCIONAL
//Existen diversas funciones nativas de Javascript que toman como parametro otras
//funciones.

//forEach: Itera en vector. Aplica la funcion a cada item
let sum = 0
const numeros = [2, 6, 8, 13, 41]
numeros.forEach(num => sum += num)

console.log(sum)

const paises = ['Argentina', 'Brasil', 'Colombia', 'España']
paises.forEach(pais => console.log(pais.toUpperCase()))

//map: Itera un vector. Aplica la funcion a cada item y devuelve un nuevo vector
const vectorModificado = numeros.map(num => num ** 2) //Cuadrado
console.log(vectorModificado)

//filter: filtra elementos de un vector y devuelve un vector nuevo
const filtrado = vectorModificado.filter(num => num > 4)
console.log(filtrado)

//reduce: toma como parametro un acumulador, actual e inicio (opcional)
const suma2 = numeros.reduce((acc, cur) => acc + cur, 0)
console.log(suma2)

//every: revisar si todos los elementos cumplen con una condicion
if (numeros.every(numero => typeof numero === 'number')){
    console.log('Son todos numeros')
}
else{
    console.log('No todos son numeros')
}

//find: devuelve el primer elemento que cumpla la condicion
const numero = numeros.find(numero => numero > 5)
console.log(numero)

//findIndex: devuelve el indice del primer elemento que cumpla la condicion
const indice = numeros.findIndex(numero => numero > 5)
console.log(indice)

//some: revisar si algunos elementos cumplen una condicion
const nombres = ['Ramiro', 'Gaston', 'TULES']
if (nombres.some(nombre => nombre.includes('a'))){
    console.log('Algunos tienen "a"')
}
else { console.log('No tienen "a"') }

//sort: ordena elementos de forma ascendente o descendente. Solo strings
nombres.sort()
console.log(nombres)

numeros.sort((a, b) => b - a) //Sort para numeros, descendente
console.log(numeros)

const usuarios = [
    {nombre: 'Ramiro', edad: 26},
    {nombre: 'Carlos', edad: 62},
    {nombre: 'Dulce', edad: 24}
]
usuarios.sort((a, b) => {
    if (a.nombre < b.nombre) return -1
    if (a.nombre > b.nombre) return 1
    return 0
})

console.log(usuarios)