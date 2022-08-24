//Controllers para la logica de negocio
//realizar un metodo para cada ruta
//La peticion llega al archivo de rutas
import{ServicioHabitacion} from '../services/servicioHabitacion.js'

export class ControllersHabitacion{
    constructor(){}
    //Buscar habitaciones
    buscarHabitaciones(request,response){
        //Llamo al servicio
        let servicioHabitacion=new ServicioHabitacion()


        //Intento resolver la peticion
        try{
           response.status(200).json({ //formato de respuesta estandar
            mensaje:"exito en la consulta", 
            datos:servicioHabitacion.buscarTodas()
           })
            

        } catch(error){ //fallo resolviendo la peticion
            response(400).json({
                mensaje:"Fallo en la consulta" +error, 
                datos:null  
            })
        }
    }

    //buscar habitacion por id
    buscarHabitacionId(request,response){
        let identificador=request.params.id

        //llamo al servicio
        let servicioHabitacion=new ServicioHabitacion()


        try{
            response.status(200).json({
            mensaje:"exito en la consulta " + identificador,
            datos:servicioHabitacion.buscarHabitacionId(identificador)
            })
             
         } catch(error){ //fallo resolviendo la peticion
             response(400).json({
                mensaje:"Fallo en la consulta" +error, 
                datos:null 
             })
         }
    }

    //agregar la habitacion
    agregarHabitacion(request,response){  
        let cuerpo=request.body

        //llamo al servicio
        let servicioHabitacion=new ServicioHabitacion()

        try{
        servicioHabitacion.agregar(cuerpo)
        response.status(200).json({    
            mensaje:"exito agregando la habitacion",
            datos:null
        })
         

     } catch(error){ //fallo resolviendo la peticion
         response(400).json({
            mensaje:"Fallo agregando habitancion" +error, 
            datos:null 
         })
     }}

    //editar habitacion
    editarHabitacion(request,response){ 
        //recibir id como parametro
        let id=request.params.id
        //Recibir los datos con los que voy a editas (body)
        let datos=request.body 

        //llamo al servicio
        let servicioHabitacion=new ServicioHabitacion()

        try{
            servicioHabitacion.actualizar(id,datos)
            response.status(200).json({
            mensaje:"exito editando la habitacion" +id,
            datos:null
        })
             

     } catch(error){ //fallo resolviendo la peticion
         response(400).json({
            mensaje:"Fallo editando habitancion" + error, 
            datos:null
         })
     }}

    //eliminar habitacion
    eliminarHabitacion(request,response){  try{
        response.status(200).json({})
         

     } catch(error){ //fallo resolviendo la peticion
         response(400).json({})
     }}
}