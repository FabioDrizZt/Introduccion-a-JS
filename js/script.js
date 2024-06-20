// Variables (manera antigua)
var saludo = 'Hola mundo!'
// Manera moderna de escribir variables (ES6)
let saludoLet = 'Hola mundo con let'
const saludoConst = 'Hola mundo con var'

// Esto escribe por consola: hola mundo
console.log(saludo)
console.log(saludoLet)
console.log(saludoConst)
// Esto muestra una ventana emergente:
// alert('Hola mundo Emergente!')
// Esto escribe en el html:
// document.write('Hola mundo en el documento')
// Diferentes console.log
console.log('Hola mundo con log')
console.info('Hola mundo con info')
console.warn('Hola mundo con warn')
console.error('Hola mundo con error')

const frutas = ['piña', 'anana', 'palta', 'aguacate']
const estudiante = { nombre: 'pepe', apellido: 'grillo', edad: 8 }
console.table(frutas)
console.table(estudiante)

const edad = 18
console.assert(edad >= 18,'El usuario es menor de edad')
