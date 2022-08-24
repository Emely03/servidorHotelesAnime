import { modeloHabitacion } from '../models/modeloDatosHabitacion.js'

export class ServicioHabitacion{
    constructor(){}

    async buscarTodas(){
        let habitaciones= await modeloHabitacion.find()
        return habitaciones
    }

    async buscarPorId(id){
        let habitacion = await modeloHabitacion.findById(id)
        return habitacion
    }

    async agregar(datos){
        let habitacionguardar=new modeloHabitacion(datos) 
        return await habitacionguardar.save()
    }

    async actualizar(id,datos){
        return modeloHabitacion.findByIdAndUpdate(id, datos)
    }
    
}