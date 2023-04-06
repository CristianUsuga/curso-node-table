const { boolean } = require('yargs');
const {crearArchivo}= require('./helpers/multiplicar.js');
const argv = require('./config/yargs.js');
const colors = require('colors');


console.clear();

console.log(argv);

crearArchivo(argv.base,argv.listar, argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo.brightMagenta, 'creado'))
    .catch(err => console.log(err));


