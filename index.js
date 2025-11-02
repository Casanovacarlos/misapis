import Server from './server/server.js';
import colors from 'colors';
import dotenv from 'dotenv';
import personajeRoutes from './routes/personaje.routes.js';
dotenv.config();

const server = new Server();
server.listen();

console.log('Guamu');
