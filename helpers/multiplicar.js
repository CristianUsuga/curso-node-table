const fs= require('fs');
const colors = require('colors'); 
const crearArchivo =async (base = 5, listar, hasta= 10)=>{
    try {

        let salida,consola ='';
            for (let i = 1; i <= hasta; i++) {
                consola +=`${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`;
                salida +=`${base} x ${i} = ${base*i}\n`;
            }

        if(listar){
                
            console.log('=========================='.yellow);
            console.log(`       Tabla del ${colors.brightBlue( base)}:`.white,)      
            console.log('=========================='.yellow);
            console.log(consola);
            

        }

        fs.writeFileSync( `./salida/tabla-${base}.txt`,salida);
        return`tabla-${base}.txt creado`;
        
    } catch (error) {
        
        throw error;
    }

    
}

module.exports = {
    crearArchivo,
} 


//Otra forma const crearArchivo = (base = 5)=>{
//     console.log(`==========================
//     Tabla del ${base}:
// ==========================`)   
// let salida ='';
// for (let i = 1; i <= 10; i++) {
//     salida +=`${base} x ${i} = ${base*i}\n`;
    
// }

// console.log(salida);

// return promesa = new Promise((resolve,reject)=>{
//     fs.writeFileSync( `tabla-${base}.txt`,salida);
    
//     (salida)
//     ?resolve(salida)
        
//     :reject('No se ha creado.')
// }) 