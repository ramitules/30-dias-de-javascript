//Los datos pueden ser de dos tipos: primitivos o no primitivos

/*Primitivos
Numeros (integrales, flotantes)
Strings (cadena de caracteres entre comillas simples o dobles)
Booleanos (true o false)
Null (valor vacio)
Undefined (una variable declarada sin valor inicial)
Symbol (valor unico generado por el constructor Symbol)
*/

/*No primitivos
Objetos
Vectores
*/
/*
//Los tipos de datos primitivos no se pueden modificar (inmutables)
let palabra = 'Javascript'
palabra[0] = 'Y'
console.log(palabra) //Javascript

let python = 'Python'
console.log(palabra == python) //False

//Los tipos de datos no-primitivos permiten su modificacion.
let vector = [1, 2, 3]
vector[0] = 4
console.log(vector) //[4, 2, 3]

//Los vectores pueden ser modificados, pero no pueden ser comparados por sus valores.
//Incluso si dos vectores tienen las mismas propiedades y valores, no son estrictamente iguales
let vector2 = [4, 2, 3]
console.log(vector == vector2) //false

//No se deben comparar tipos de datos no-primitivos, tales como vectores, funciones u objetos,
//ya que son de tipo referencia, por ende se compara su referencia en lugar de sus valores.
//Dos objetos son iguales si nos referimos al mismo objeto
let vector3 = vector
console.log(vector3 == vector) //true

//NUMEROS: son integrales y decimales que pueden realizar todo tipo de operaciones aritmeticas
let edad = 25
const gravedad = 9.81
let mass = 72
const pi = 3.14

//MATH: el objeto Math provee muchos metodos para trabajar con numeros
const PI = Math.PI
console.log(PI) //3.141592653589793

console.log(Math.round(PI)) //Redondea pabajo o parriba

console.log(Math.round(gravedad))

console.log(Math.floor(PI)) //3, redondea pabajo

console.log(Math.ceil(PI)) //4, redondea parriba

console.log(Math.min(-5, 3, 20, 4, 5, 10)) //-5, el valor minimo

console.log(Math.max(-5, 3, 20, 4, 5, 10)) //20, el valor maximo

const randNumero = Math.random() //Crea un numero aleatorio entre 0 y 0.999999
console.log(randNumero)

const numero = Math.floor(Math.random() * 11) //Crea un numero aleatorio entre 0 y 10
console.log(numero)

console.log(Math.abs(-3)) //3, valor absoluto

console.log(Math.sqrt(100)) //10, raiz cuadrada

console.log(Math.pow(3, 2)) //9, potencia

console.log(Math.E) //2.718

console.log(Math.log(2)) //0.6931471805599453, logaritmo natural con base E de x, Math.log(x)
console.log(Math.log(10)) //2.302585092994046

console.log(Math.LN2) //Igual al log(2)
console.log(Math.LN10) //Igual al log(10)

console.log(Math.sin(0))
Math.sin(60)

Math.cos(0)
Math.cos(60)

//STRINGS: cadenas de caracteres encerradas en comillas simples, comillas dobles o tilde inversa
let espacio = ' '
let nombre = 'Ramitules'

let concatenado = nombre + espacio + nombre //Se crea una concatenacion uniendo varios strings
console.log(concatenado) //Esta es la forma antigua de concatenar, utilizando +

const parrafo = 'Mi nombre es Ramiro Tules.\
Vivo en Mendoza, Argentina.\
Tengo 25 anios'          //Para escribir un parrafo o un string de varias lineas, se utiliza el backslash
                         //al final de cada linea.

console.log(parrafo)

//Secuencias de escape: la barra invertida (backslash, \) seguida de algun caracter especial, indica
//una secuencia de escape. Las mas comunes:
let newLine = 'Hola\nNueva linea'
let tabulacion = 'Hola\ttabulacion'
let barraInvertida = 'Hola \\ barra invertida'
let comillaSimple = '\'Comillas simples\''
let comillasDobles = '\"Comillas dobles\"'

console.log(newLine)
console.log(tabulacion)
console.log(barraInvertida)
console.log(comillaSimple)
console.log(comillasDobles)

//String Plantilla: se crean con dos tildes inversas. Se pueden inyectar datos dentro utilizando "${}"
//Se pueden añadir valores y algunas operaciones
let num1 = 2
let num2 = 3
console.log(`La suma de ${num1} y ${num2} es ${num1 + num2}`) //Interpolacion de string

//Metodos de string
//length: devuelve la cantidad de caracteres en una cadena
let cadena = 'Javascript'
console.log(cadena.length)

//Acceso a caracteres a traves de su indice
console.log(cadena[0])

//Convertir a mayusculas
console.log(cadena.toUpperCase())

//Convertir a minusculas
console.log(cadena.toLowerCase())

//Recortar cadena
console.log(cadena.substr(4, 6)) //Desde el caracter 4, 6 letras

//Recortar cadena entre x caracteres
console.log(cadena.substring(4, 7)) //Desde el caracter 4 al 7

//Dividir cadena en una ubicacion especifica
let cadena2 = '30 dias de Javascript'
console.log(cadena2.split()) //Devuelve lo mismo pero en un vector
console.log(cadena2.split('')) //Devuelve cada letra por separado en un vector
console.log(cadena2.split(' ')) //['30', 'dias', 'de', 'Javascript']

//Remover espacios al principio y/o final
let cadena3 = '   30 dias de Javascript   '
console.log(cadena3.trim())

//Comprobar si un string pertenece a otro string
console.log(cadena3.includes('dia')) //return bool

//Reemplazo
console.log(cadena3.replace('Javascript', 'Python'))

//Un caracter en la posicion indice
let index = cadena3.charAt(6) //d
console.log(index)

//Codigo ASCII de un caracter
let indexASCII = cadena3.charCodeAt(1)
console.log(indexASCII)

//Indice. Si no encuentra, devuelve -1
let cadena4 = '30 dias'
console.log(cadena4.indexOf('d'))

//Ultimo indice. Si no encuentra, devuelve -1
console.log(cadena4.lastIndexOf('s'))

//Concatenar
console.log(cadena4.concat(cadena3))

//Chequear si comienza de una forma
console.log(cadena4.startsWith('30')) //true

//Chequear si termina de una forma
console.log(cadena4.endsWith('s')) //true

//Buscar substring dentro de cadena. Devuelve el primer indice
let cadena5 = 'Hola que tal buen dia'
console.log(cadena5.search(/buen/)) //REGEX

//Devolver un vector con todas las coincidencias
console.log(cadena5.match(/dia/gi)) //g: global, i: mayusculas o minusculas

//Repetir un string
console.log('hola'.repeat(10))

//Castear (cambiar tipo de dato)
//STRING a INT
let numerito = '10'
let numerito_int = parseInt(numerito) //Primera forma
let numerito_int_2 = Number(numerito) //Segunda forma
let numerito_int_3 = +numerito //Tercera forma

//STRING a FLOAT
let numerito2 = '9.81'
let numerito2_float = parseFloat(numerito2) //Primera forma
let numerito2_float_2 = Number(numerito2) //Segunda forma
let numerito2_float_3 = +numerito2

//FLOAT a INT
let numerito3 = 9.81
let numerito3_int = parseInt(numerito3) //Unica forma
*/
//EJERCICIOS

//1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days of JavaScript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(0, 1))
console.log(challenge.slice(0, 2))
console.log(challenge.includes('Script'))
console.log(challenge.split(' '))

let empresas = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(empresas.split(', '))

//console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(challenge.indexOf('J')))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))

let oracion = 'You cannot end a sentence with because because because is a conjunction'
console.log(oracion.indexOf('because'))
console.log(oracion.lastIndexOf('because'))
console.log(oracion.search('because'))

console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('t'))
console.log(challenge.match(/a/gi))

let rep = challenge.concat(' or maybe more')
console.log(rep)
console.log(rep.repeat(2))

//Nivel 2
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

let numero = '10'
console.log(typeof (numero))
console.log(+numero)

let flotante = parseFloat('9.8')
console.log(typeof (flotante))
console.log(Math.round(flotante))

console.log('jargon'.includes('on'))
console.log('python'.includes('on'))

console.log(Math.round(Math.random() * 100))
console.log(50 + (Math.round(Math.random() * 50)))
console.log(Math.round(Math.random() * 255))

console.log('JavaScript'.charAt(Math.round(Math.random() * 'JavaScript'.length)))

console.log(1, 1, 1, 1, 1)
console.log(2, Math.pow(2, 0), Math.pow(2, 1), Math.pow(2, 2), Math.pow(2, 3))
console.log(3, Math.pow(3, 0), Math.pow(3, 1), Math.pow(3, 2), Math.pow(3, 3))
console.log(4, Math.pow(4, 0), Math.pow(4, 1), Math.pow(4, 2), Math.pow(4, 3))
console.log(5, Math.pow(5, 0), Math.pow(5, 1), Math.pow(5, 2), Math.pow(5, 3))

let substring = oracion.substr(oracion.indexOf('because'), ('because'.length * 3 + 2))
console.log(substring)

let oracion2 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(oracion2.match(/love/gi).length)

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace(/[^a-zA-Z0-9_.\s,?]/gi, ''))

let ganancias = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let numeros = ganancias.match(/\d+/gi)
let month = +numeros[0] + +numeros[2]
let year = (month * 12) + +numeros[1]
console.log(year)