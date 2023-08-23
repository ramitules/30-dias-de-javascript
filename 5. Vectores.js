//Los vectores son una collecion de elementos ordenados y modificables. Se puede
//acceder a ellos a traves de su indice. El ultimo elemento es el tamanio del
//vector menos uno (length - 1)

//Es comun utilizar CONST para crear un vector. Asi nos aseguramos que no volveremos
//a utilizar el nombre de la variable
const vector = Array()
const vector2 = []

//Vector con valores iniciales
const vector3 = [0, 1, 2, 3, 4]

//Vector con distintos tipos de datos
const vector4 = [0, 'uno', 2, 3.14, 4]

console.log(vector4)
console.log(`Tamanio del vector: ${vector4.length}`)

//Podemos modificar el contenido del vector
vector4[1] = 1
console.log(vector4)

//METODOS
const vec = Array(8).fill('x') //Llena el vector con un valor estatico
const union = vector3.concat(vector4) //Concatenar dos vectores
console.log(union.length) //Tamanio del vector
console.log(union.indexOf(0)) //Ubicacion del item. Si no existe devuelve -1

union.indexOf(9) === -1
    ?   console.log('No existe')
    :   console.log('Existe!')

console.log(vec.lastIndexOf('x')) //Ubicacion ultima del item. Si no existe devuelve -1
console.log(vec.includes('y')) //Devuelve true o false si existe o no el item
console.log(Array.isArray(vec)) //Devuelve true o false si el tipo de dato es Vector
console.log(union.toString()) //Convierte el vector en string
console.log(union.join(' - ')) //Une los elementos en un string con el separador indicado (por defecto ",")
console.log(union.slice(2, 4)) //Dividir vector. Toma como argumentos el inicio y final
union.splice(3, 2) //Remueve elementos. Toma como argumentos la ubicacion y la cantidad de elementos a borrar
console.log(union)
union.push(9, 8, 7) //Aniadir elementos al final
union.pop() //Remueve el ultimo elemento
union.shift() //Remueve el primer elemento
union.unshift(99) //Aniadir elemento al inicio
union.reverse() //Invierte el orden del vector
union.sort() //Ordena de forma ascendente. Puede tomar como argumento una funcion

//MATRICES
//Basicamente, vector de vectores
const matriz = [[1, 2, 3], [4, 5, 6]]