function printNetwork() {
    const os = require('node:os');
    let interfaces = os.networkInterfaces()
    for (let interfaz in interfaces) {
        console.log(`Interfaz ${interfaz}`)
        for (let i of interfaces[interfaz]) {
            console.log(`     Familia: ${i.family}`)
            console.log(`          Dirección: ${i.address}`)
            console.log(`          Interno: ${i.internal}`)
    
        } 
    }
}

module.exports = printNetwork