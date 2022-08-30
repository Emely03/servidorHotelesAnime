import express from 'express' 

//Importar el controlador de habitaciones
import {ControllersHabitacion} from '../controllers/ControllerHabitacion.js' //Agregar siempre .js
import { ControllersReserva } from '../controllers/ControllersReserva.js'
let controllersHabitacion = new ControllersHabitacion () //INSTANCIAR LA CLASE PARA LUEGO UTILIZARLA EN LAS ROUTES
let controllersReserva = new ControllersReserva()


//Variable para personalizar las rutas (ENDPONTS) de mis servicios
export let routes=express.Router()

//Escribos mis rutas (Cada ruta es un servicio)


//ENDPOINTS PARA LOS SERVICIOS ASOCIADOS A LAS HABITACIONES
routes.get('/viajes/v1/habitaciones', controllersHabitacion.buscarHabitaciones)//Obtiene todo, SE DEJA LA COMA PARA LLAMAR AL METODO 

routes.get('/viajes/v1/habitacion/:id', controllersHabitacion.buscarHabitacionId)//Obtiene solo una con un parametro, antes del id agg dos puntos que seria un codigo variable

routes.post('/viajes/v1/habitacion', controllersHabitacion.agregarHabitacion)

routes.put('/viajes/v1/habitacion/:id', controllersHabitacion.editarHabitacion)


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ENDPOINTS PARA LOS SERVICIOS ASOCIADOS A LAS RESERVAS
routes.get('/viajes/v1/reservas', controllersReserva.buscarReservas)

routes.get('/viajes/v1/reserva/:id', controllersReserva.buscarReservaId)

routes.post('/viajes/v1/reserva', controllersReserva.agregarReserva)//Crear reservas

routes.put('/viajes/v1/reserva/:id', controllersReserva.editarReserva)//actualizar la reserva

routes.delete('/viajes/v1/cancelacion/:id', controllersReserva.eliminarReserva)//cancelar o eliminar la reserva