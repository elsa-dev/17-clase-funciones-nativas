const aHackerSpeak = (str) => {
    let hacker;
    if (str.includes("i")) {
       hacker = str.replace(/i/gi, `1`)  
    }
    if (str.includes("e")) {
        hacker = hacker.replace(/e/gi, `3`)
    }
    if (str.includes("a")) {       
        hacker = hacker.replace(/a/gi, `4`)
    }
    if (str.includes("s")) {
        hacker = hacker.replace(/s/gi, `5`)
    }
    if (str.includes("o")) {
        hacker = hacker.replace(/o/gi, `0`)
        
    }
    return hacker
}


console.log(aHackerSpeak('javascript'))
console.log(aHackerSpeak('soy una hacker'))
console.log(aHackerSpeak('ADA LOVELACE'))