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
    type: [String], // Ejemplo: ["Gomu Gomu no Mi", "Gear Fifth"]
    default: [],
  },
  haki: {
    tipo: {
      type: [String], // Ejemplo: ["Kenbunshoku", "Busoshoku", "Haoshoku"]
      default: [],
    },
  },
});

export default mongoose.model('Personaje', personajeSchema);
