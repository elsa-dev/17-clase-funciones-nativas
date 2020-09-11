// const tieneMismaLongitud = (a,b) => {
//     if(a.length == b.length) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// console.log(tieneMismaLongitud(`javascript`, `java`))
// console.log(tieneMismaLongitud(`manzana`, `cerveza`))




// esUltimoCaracter(palabra, caracter)
// Crear una función igualLongitud que tome como argumentos una palabra y un caracter y devuelva true si la palabra termina con el caracter o false de lo contrario




// const esUltimoCaracter = (palabra, caracter) => {
//     if (palabra.slice(-1) == caracter) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// console.log(esUltimoCaracter('lovelace', 'e'))
// console.log(esUltimoCaracter('lovelace', 'f'))






// Crear una función esValida que tome como argumento una contrasenia (string) y devuelva true si tiene 8 caracteres o más o false si tienen menos de 8 caracteres


// const esValida = (constrasenia) => {
//     if(constrasenia.length >= 8) {
//         return true
//     }
//     else {
//         return false
//     }

// }

// console.log(esValida('contraseniaMuySegura'))
// console.log(esValida('abc123'))


// Crear una función sonIguales que tome como argumentos dos strings a y b y devuelva true si ambos strings tienen el mismo contenido independientes del caso y false en caso contrario.


// const sonIguales = (a,b) => {
//     if (a.length == b.length) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// console.log(sonIguales('javascript', 'JavaScript'))
// console.log(sonIguales('AdA LoVeLaCe', 'Ada Lovelace'))
// console.log(sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO'))


// Crear una función contarPalabras que tome como argumento un string str y devuelva la cantidad de palabras que posee

// const contarPalabras = (str) =>{
//     let separarPalabras = str.split(" ")
//      let contarPalabras = separarPalabras.length
//      return contarPalabras
//  }

//  console.log(contarPalabras('javascript'))
//  console.log(contarPalabras('ada lovelace'))
//  console.log(contarPalabras('si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos')
//  )




// Crear una función esFraccionMayorAUno que tome como argumento un string fraccion (en el formato 'numerador/denominador') y devuelva true si dicha fracción es mayor a 1 o false de lo contrario


// const esFraccionMayorAUno = (fraccion) => {
//     let primerString = fraccion.charAt(0)
//     let primerNumero = Number(primerString)
//     let segundoString = fraccion.slice(-1)
//     let segundoNumero = Number(segundoString)
//     let fraccionEnNumeros = primerNumero / segundoNumero
//     if (fraccionEnNumeros > 1) {
//         return true
//     } 
//     else {
//         return false
//     }
        
// }
// console.log(esFraccionMayorAUno('1/2'))
// console.log(esFraccionMayorAUno('2/2'))
// console.log(esFraccionMayorAUno('4/2'))



// Crear una función capitalizar que tome como argumento un string str y devuelva el mismo string con la primera letra en mayúscula


// const capitalizar = (str) => {
//     let primeraLetra = str.charAt(0)
//     let primeraMay = primeraLetra.toUpperCase()
//     let restoPalabra = str.slice(1,str.length)
//     let palabraEnMayuscula = primeraMay.concat(restoPalabra)
//     return palabraEnMayuscula
// }

// console.log(capitalizar('lovelace'))
// console.log(capitalizar('había una vez...'))


// Crear una función aHackerSpeak que tome como argumento un string str y el mismo string convertido a H4CK3R 5P3AK, siguiendo las siguientes reglas:
/*

 const aHackerSpeak = (str) => {
    let hacker;
    hacker = str.replace(/i/gi, `1`)  
    hacker = hacker.replace(/e/gi, `3`)
    hacker = hacker.replace(/a/gi, `4`)
    hacker = hacker.replace(/s/gi, `5`)
    hacker = hacker.replace(/o/gi, `0`)
    return hacker
   
}


console.log(aHackerSpeak('javascript'))
console.log(aHackerSpeak('soy una hacker'))
console.log(aHackerSpeak('ADA LOVELACE'))



*/

// obtenerPrimeraOracion(str)
// Crear una función obtenerPrimeraOracion que tome como argumento 
// un string str y la primera oración de dicho string

const obtenerPrimeraOracion = (str) => {
    let separarFrases = str.split(",")[0]
    return separarFrases
} 

console.log(obtenerPrimeraOracion('A mí no me preguntes, sólo soy una oración'))
console.log(obtenerPrimeraOracion('Tengo varias oraciones. Esta es la segunda. Y esta es la tercera.'))