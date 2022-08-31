import {ServicioReserva} from '../services/servicioReserva.js'

export class ControllersReserva{
    constructor(){}
   async buscarReservas(request,response){
        let servicioReserva = new ServicioReserva()
        try{
            response.status(200).json({ //formato de respuesta estandar
             mensaje:"exito en la consulta", 
             datos:await servicioReserva.buscarTodas()
            })
              
         } catch(error){ //fallo resolviendo la peticion
             response(400).json({
                 mensaje:"Fallo en la consulta" +error, 
                 datos:null  
             })
         }
     }

    async buscarReservaId(request,response){
        let identificador=request.params.id

        //llamo al servicio
        let servicioReserva = new ServicioReserva()


        try{
            response.status(200).json({
            mensaje:"exito en la consulta " + identificador,
            datos:await servicioReserva.buscarPorId(identificador)
            }
             )
             
         } catch(error){ //fallo resolviendo la peticion
             response(400).json({
                mensaje:"Fallo en la consulta" +error, 
                datos:null 
             })
         }
    }

    //agregar reserva
    async agregarReserva(request,response){  
        let cuerpo=request.body

         //llamo al servicio
         let servicioReserva = new ServicioReserva()

        try{
       await servicioReserva.agregar(cuerpo)
        response.status(200).json({    
            mensaje:"exito agregando la reserva",
            datos:null
        })
         

     } catch(error){ //fallo resolviendo la peticion
         response(400).json({
            mensaje:"Fallo agregando reserva" +error, 
            datos:null 
         })
     }}

     //editar reserva
   async editarReserva(request,response){ 
        //recibir id como parametro
        let id=request.params.id
        //Recibir los datos con los que voy a editas (body)
        let datos=request.body 

        //llamo al servicio
        //llamo al servicio
        let servicioReserva = new ServicioReserva()

        try{
           await servicioReserva.actualizar(id,datos)
            response.status(200).json({
            mensaje:"exito editando la reserva" +id,
            datos:null
        })
             

     } catch(error){ //fallo resolviendo la peticion
         response(400).json({
            mensaje:"Fallo editando reserva" + error, 
            datos:null
         })
     }}

     //eliminar habitacion
    async eliminarReserva(request,response){  
         //llamo al servicio
         let servicioReserva = new ServicioReserva()
         let id=request.params.id
        try{
       await servicioReserva.eliminar(id)
        response.status(200).json({
            mensaje:"exito elimando la habitacion" + id,
            datos:null
        })
         
     } catch(error){ //fallo resolviendo la peticion
         response(400).json({
            mensaje:"Fallo elimando la habitacion" + error,
            datos:null
         })
     }}
}
