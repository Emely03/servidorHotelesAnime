//IMPORTAR A MONGOOSE, con que datos vamos a describir una habitacion
import mongoose from "mongoose";


//esquema de datos de mongoose y me habla de que regla en los datos se va a manipular
const Schema = mongoose.Schema;

const Habitacion = new Schema({
    nombre:{
        type:String,
        required:true
    },
    valorPersona:{
        type:Number,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    imagenesHotel:{
        type:String,
        required:false
    },
    numeroPersonas:{
        type:Number,
        required:true
    }
})

export const modeloHabitacion=mongoose.model('habitacion',Habitacion)
