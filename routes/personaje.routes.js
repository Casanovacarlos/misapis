import { Router } from 'express';
import {
  getAllPersonajes,
  getPersonajeById,
  postPersonaje,
  putPersonaje,
  deletePersonaje
} from '../controllers/personajes.controller.js';

const personaje = Router();

// Rutas principales
personaje.get('/', getAllPersonajes);     // Obtener todos los personajes
personaje.get('/:id', getPersonajeById);  // Obtener un personaje por ID
personaje.post('/', postPersonaje);       // Crear un nuevo personaje
personaje.put('/:id', putPersonaje);      // Actualizar un personaje existente
personaje.delete('/:id', deletePersonaje); // Eliminar un personaje

export default personaje;
