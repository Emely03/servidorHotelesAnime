import {modeloReserva} from '../models/modeloDatosReserva.js'

export class ServicioReserva{
    constructor(){}

    async buscarTodas(){
        let reservas= await modeloReserva.findById()
        return reservas
    }

    async buscarPorId(id){
        let reserva = await modeloReserva.findById(id)
        return reserva
    }  
    async agregar(datos){
        let reservaguardar=new modeloReserva(datos) 
        return await reservaguardar.save()
    }

    async actualizar(id,datos){
        return modeloReserva.findByIdAndUpdate(id, datos)
    }
   
    async eliminar(id){
        return modeloReserva.findByIdDelete(id)
    }
}