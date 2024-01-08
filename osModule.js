function printOS() {
    const os = require('node:os');
    console.log(`Nombre: ${os.platform()}`)
    console.log(`Tipo: ${os.type()}`)
    console.log(`Versión: ${os.version()}`)
    console.log(`Arquitectura: ${os.arch()}`)
    console.log(`CPUs: ${os.cpus().length}`)
    console.log(`Memoria Total: ${(os.totalmem()/10e6).toFixed(2)} MB`)
    console.log(`Memoria Libre: ${(os.freemem()/10e6).toFixed(2)} MB`)
}
module.exports = printOS