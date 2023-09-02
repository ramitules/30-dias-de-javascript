//Un objeto es un par key value, como un diccionario. Es mutable
const rectangulo = {
    alto: 20, //puede tener cualquier tipo de valor, desde strings hasta booleanos
    ancho: 30
}
console.log(rectangulo)

const misDatos = {
    nombre: 'Ramiro',
    apellido: 'Tules',
    edad: 26,
    habilidades: [
        'HTML',
        'CSS',
        'Javascript',
        'Python',
        'C++'
    ],
    getNombre: function() {
        return `${this.nombre} ${this.apellido}`
    },
    'telefono celular': 1122334455
}

//Se puede acceder a las propiedades con puntito o corchetes
console.log(misDatos.edad)
console.log(misDatos['telefono celular'])
console.log(misDatos.getNombre())

//METODOS
const copiaDatos = Object.assign({}, misDatos)
console.log(copiaDatos)

const keys = Object.keys(copiaDatos)
const values = Object.values(copiaDatos)
const vector = Object.entries(copiaDatos)
console.log(copiaDatos.hasOwnProperty('name')) //False


//EJERCICIOS RESUELTOS
const perro = {}
console.log(perro)
perro.nombre = 'milton'
perro.patas = 'marrones'
perro.color = 'amarillo'
perro.edad = 4
perro.ladrar = function() {
    return 'woof woof'
}
console.log(`Nombre: ${perro.nombre}\nPatitas: ${perro.patas}\nColor: ${perro.color}\nEdad: ${perro.edad}\nLadra! ${perro.ladrar()}`)

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  
let loggedIn = 0
let mostPoints = []
for (const user of Object.keys(users)) {
    if (users[user].isLoggedIn) {
        loggedIn ++
    }
    if (users[user].points >= 50) {
        mostPoints.push(user)
    }
}

console.log(`Conectados: ${loggedIn}\nMas de 50 puntos: ${mostPoints}`)

const MERN = ['MongoDB', 'Express', 'React', 'Node']

for (const user of Object.keys(users)) {
    let flag = 0

    for (const skill of MERN){
      if (users[user].skills.includes(skill)){
        flag ++
      }
    }

    if (flag === 4) {
        console.log(`${user} tiene stack MERN`)
    }
}