//Los sets son una coleccion de elementos unicos

const set = new Set()
console.log(set)

//Crear set desde vector
const idiomas = [
    'Ingles',
    'Frances',
    'Italiano',
    'Español'
]
const setIdiomas = new Set(idiomas)
console.log(setIdiomas)

//Se puede iterar
for (const idioma of setIdiomas) {
    console.log(idioma)
}

//Se pueden añadir elementos
setIdiomas.add('Japones')
console.log(setIdiomas)

//Tamaño del set
console.log(setIdiomas.size) //5

//Eliminar elemento del set
setIdiomas.delete('Frances')
console.log(setIdiomas)

//Chequear si existe un elemento
console.log(setIdiomas.has('Japones')) //true

//Remover todos los elementos
setIdiomas.clear()
console.log(setIdiomas)

//EJEMPLO
const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French'
]

const langSet = new Set(languages)
console.log(langSet)

const counts = []
const count = {}

for (const l of langSet) {
    const filteredLang = languages.filter((lng) => lng === l)
    console.log(filteredLang)
    counts.push({lang: l, count: filteredLang.length})
}

console.log(counts)

//UNION de dos vectores se utiliza el operador "..." en una lista nueva (A U B)
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

for (const x of C) {
    console.log(x) //1, 2, 3, 4, 5, 6
}

//INTERSECCION de dos vectores se utiliza "filter" en una lista nueva (A n B)
c = a.filter((num) => B.has(num))
C = new Set(c)

console.log(C)

//DIFERENCIA se utiliza "filter" (A \ B)
c = a.filter((num) => !B.has(num))
C = new Set(c)

console.log(C)

//MAP
//Crear un mapeo vacio
const map = new Map()
console.log(map)

//Crear un mapeo desde un vector
const paises = [
    ['Argentina', 'Buenos Aires'],
    ['Uruguay', 'Montevideo'],
    ['Paraguay', 'Asuncion']
]

const mapPaises = new Map(paises)
console.log(mapPaises)

//Añadir elementos
mapPaises.set('Chile', 'Santiago de Chile')
console.log(mapPaises)

//Obtener un elemento
console.log(mapPaises.get('Argentina'))
console.log(mapPaises.get('Colombia')) //undefined si no encuentra la key

//Saber si existe un elemento
console.log(mapPaises.has('Chile')) //true

//Obtener todos los elementos con for
for (const pais of mapPaises) {
    console.log(pais)
}

for (const [pais, ciudad] of mapPaises) {
    console.log(pais, ciudad)
}

