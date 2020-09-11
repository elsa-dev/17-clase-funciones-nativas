// let nombre = `elsa`

// console.log(`Mi nombre tiene ${nombre.length} letras`)


// const cantidadDeLetras = (nombre, apellido) => {
//     return `Tu nombre tiene ${nombre.length} letras y tu apellido tiene ${apellido.length} letras`
// }

// console.log(cantidadDeLetras(`ada`, `lovelace`))

const burlarse = (string) => {
    return string.replace(/a/i, `i`)
}

console.log(burlarse(`programar es dificil`))