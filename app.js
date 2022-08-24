//despierta el servidor app.js

import {Servidor} from './servidor/Servidor.js'
//Importanmos dotenv para manipular las variables de entorno

import 'dotenv/config'

//Para utilizar una clase se debe primero instanciar
//Para usar una clase debo crear un objeto (ES UNA VARIABLE)
//para usar una clase le debo sacar copia

let servidorNodejs=new Servidor()
servidorNodejs.encenderServidor()
console.log(process.env.PORT) // remove this after you've confirmed it working