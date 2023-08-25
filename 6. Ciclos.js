//Ciclo FOR
const provincias = ['Mendoza', 'Buenos Aires', 'Cordoba', 'Santa Fe']
const provinciasMayus = []

for (let i=0; i<provincias.length; i++){
    provinciasMayus.push(provincias[i].toUpperCase())
}
console.log(provinciasMayus)

//Ciclo WHILE
let i = 0
while (i < 5) {
    console.log(i)
    i++
}

//Ciclo DO WHILE
do {
    console.log(i)
    i++
} while (i < 10)

//Ciclo FOR OF. Se utiliza en vectores cuando no estamos interesados en el indice
//de cada elemento
for (const provincia of provincias) {
    console.log(provincia.toUpperCase())
}

//BREAK detiene el ciclo
for (let i = 0; i <= 5; i++){
    if (i == 3){
        break
    }
    console.log(i)
}

//CONTINUE saltea una iteracion
for (let i = 5; i > 0; i--){
    if (i == 3){
        continue
    }
    console.log(i)
}