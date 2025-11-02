import ejemplo from './ejemplo.routes.js';
import { Router } from 'express';
import personaje from './personaje.routes.js';
const indexRoutes = Router();

indexRoutes.use('/ejemplo', ejemplo);
indexRoutes.use('/personajes', personaje);
export default indexRoutes;
