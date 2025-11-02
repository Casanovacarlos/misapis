import mongoose from 'mongoose';
import Personaje from '../models/personaje.model.js'; // Asegúrate de tener este modelo creado

// Obtener todos los personajes
export const getAllPersonajes = async (req, res) => {
  console.log('Obteniendo todos los personajes de One Piece');
  try {
    const personajes = await Personaje.find({}, { __v: 0 });
    if (personajes.length === 0) {
      return res.status(404).json({
        msg: 'No se encontraron personajes',
      });
    }
    return res.status(200).json({
      personajes,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al obtener los personajes',
    });
  }
};

// Obtener personaje por ID
export const getPersonajeById = async (req, res) => {
  console.log('Obteniendo personaje por ID');
  const id = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        msg: 'ID no válido',
      });
    }

    const personaje = await Personaje.findById(id);
    if (!personaje) {
      return res.status(404).json({
        msg: 'Personaje no encontrado',
      });
    }

    return res.status(200).json({
      personaje,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al obtener el personaje',
    });
  }
};

// Crear nuevo personaje
export const postPersonaje = async (req, res) => {
  console.log('POST PERSONAJE');
  const body = req.body;
  const personaje = new Personaje(body);

  try {
    const validationError = personaje.validateSync();
    if (validationError) {
      const errorMessages = Object.values(validationError.errors).map(
        (error) => error.message
      );
      return res.status(400).json({
        error: errorMessages,
      });
    }

    await personaje.save();
    return res.status(201).json({
      personaje,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al guardar el personaje',
    });
  }
};

// Actualizar personaje
export const putPersonaje = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        msg: 'ID no válido',
      });
    }

    const personaje = await Personaje.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!personaje) {
      return res.status(404).json({
        msg: 'Personaje no encontrado',
      });
    }

    return res.status(200).json({
      personaje,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al actualizar el personaje',
    });
  }
};

// Eliminar personaje
export const deletePersonaje = async (req, res) => {
  console.log('DELETE PERSONAJE');
  const id = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        msg: 'ID no válido',
      });
    }

    const personaje = await Personaje.findByIdAndDelete(id);
    if (!personaje) {
      return res.status(404).json({
        msg: 'Personaje no encontrado',
      });
    }

    return res.status(200).json({
      msg: 'Personaje eliminado correctamente',
      personaje,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al eliminar el personaje',
    });
  }
};
