import mongoose from 'mongoose';

const personajeSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre del personaje es obligatorio'],
  },
  recompensa: {
    type: Number,
    required: [true, 'La recompensa es obligatoria'],
  },
  tripulacion: {
    type: String,
    required: [true, 'La tripulación es obligatoria'],
  },
  poderes: {
    type: [String], 
    default: [],
  },
  haki: {
    tipo: {
      type: [String], 
      default: [],
    },
  },
});

export default mongoose.model('Personaje', personajeSchema);

