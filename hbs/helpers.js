const hbs = require('hbs');
//helpers
hbs.registerHelper('getAnio',()=>{
    return new Date().getFullYear();
})

hbs.registerHelper('capitalizar',(texto)=>{
    let palabras = texto.split('');
    palabras.forEach( (palabra, index) => {
        palabra[index] = palabra.charAt(0).toUpperCase() + palabra.slice().toLocaleLowerCase(1);
    })
    return palabras.join(' ');
})