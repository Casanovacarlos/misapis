one piece dex es una aplicación web que hice para registrar, editar, buscar y eliminar personajes del
universo de One Piece.
Utiliza una interfaz en HTML, CSS, JavaScript y Bootstrap, conectada a un backend construido con
Node.js, Express y MongoDB.
Su objetivo es ofrecer un sistema CRUD completo: Crear, Leer, Actualizar y Eliminar personajes, con
almacenamiento local y en base de datos.
El sistema funciona en dos partes principales:
Frontend que es la interfaz del usuario.
- Permite agregar un personaje ingresando datos como nombre, tripulación, recompensa, poderes,
haki, puesto e imagen (a travez de una url puesta por el mismo usuario)
- Muestra los personajes en un carrusel dinámico.
- Permite editar y eliminar personajes.
- Guardado local en LocalStorage cuando la API no está disponible.
- Búsqueda por nombre.
   Backend el servidor con Express y MongoDB 
- Expone rutas para obtener, crear, editar y eliminar personajes.
- Se conecta a MongoDB Atlas mediante Mongoose .( utilizando nodemon .\index.routes.js para conectarse)
- Devuelve información en formato JSON.
- Valida los datos antes de guardarlos.
   ¿CÓMO HACER QUE TODO FUNCIONE?
Para poner en marcha el sistema se necesitan estos pasos:
1. Instalar dependencias
En la carpeta del backend ejecutar:
npm install express mongoose cors
2. Configurar variables de entorno (.env)
como por el ejemplo el que cluster que puse dentro del .env
MONGO_URL=mongodb+srv://carlos:carlosandres1@basenosql.efsfgra.mongodb.net/misapis
PORT=3000
3. Conectar al servidor
En el archivo principal (app.js o server.js):
mongoose.connect(process.env.MONGO_URL)
Iniciar con:
npm start
4. Ejecutar el frontend
Solo abrir el archivo index.html en el navegador.
   LAS FUNCIONES DEL BACKEND

A) getAllPersonajes
- Obtiene todos los personajes de la base de datos.
- Si no hay, devuelve mensaje de no encontrado.
B) getPersonajeById
- Recibe un ID por parámetro.
- Valida si es un ObjectId válido.
- Devuelve el personaje solicitado.
C) postPersonaje
- Recibe un personaje desde el body.
- Valida datos con Mongoose.
- Guarda el nuevo personaje en MongoDB.
D) putPersonaje
- Recibe ID y datos actualizados.
- Actualiza el personaje si existe.
E) deletePersonaje
- Elimina un personaje por ID.
EXPLICACIÓN DEL CÓDIGO DEL BACKEND
A) Importaciones:
import mongoose
import Personaje (modelo de datos)
B) Funciones exportadas:
- Cada una maneja una operación CRUD.
- Usan métodos de Mongoose como:
find(), findById(), findByIdAndUpdate(), findByIdAndDelete().
C) Router:
-  la cual Define las rutas:
- GET /api/personajes/
GET /api/personajes/:id
POST /api/personajes/
PUT /api/personajes/:id
DELETE /api/personajes/:id
D) Conexión a MongoDB:
- Se usa mongoose.connect con la variable MONGO_URL
- MongoDB Atlas permite acceso remoto a la base
comom funciona
- El frontend para gestionar la interfaz.
- El backend para manejar la lógica en servidor.
- La base de datos en MongoDB para almacenar personajes.
- Mongoose para validar y estructurar datos.
 El flujo es:
Usuario → Frontend → API REST → MongoDB → Respuesta → Frontend


