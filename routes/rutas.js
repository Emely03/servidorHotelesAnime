import express from 'express' 

//Importar el controlador de habitaciones
import {ControllersHabitacion} from '../controllers/ControllerHabitacion.js' //Agregar siempre .js
let controllersHabitacion = new ControllersHabitacion () //INSTANCIAR LA CLASE PARA LUEGO UTILIZARLA EN LAS ROUTES


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
routes.get('viajes/v1/reserva', function (req, res) { //RUTA PARA OBTENER TODAS LAS RESERVAS
  res.send('Hello World')
})

routes.get('viajes/v1/reserva/:id', function (req, res) { //RUTA PARA OBTENER SOLO UNA RESERVA
  res.send('Hello World')
})

routes.post('viajes/v1/reserva', function (req, res) { //funcion anonima que se ejecuta apenas se recibe la petición
    res.send('Hello World')
  })//Crear reservas

routes.put('viajes/v1/reserva/:id', function (req, res) { //funcion anonima que se ejecuta apenas se recibe la petición
    res.send('Hello World')
  })//actualizar la reserva

routes.delete('viajes/v1/cancelacion/:id', function (req, res) { //funcion anonima que se ejecuta apenas se recibe la petición
    res.send('Hello World')
  })//cancelar o eliminar la reserva