import express from 'express';
import { PORT, mongoDBURL } from './config.js'; // Importa el puerto y la URL de la base de datos MongoDB desde el archivo de configuración
import mongoose from 'mongoose';
import tramitesRoute from './routes/tramitesRoute.js'; // Importa las rutas relacionadas con los trámites desde el archivo tramitesRoute.js
import cors from 'cors'; // Importa el middleware CORS para permitir solicitudes desde cualquier origen

const app = express(); // Crea una instancia de la aplicación Express

// Middleware para analizar el cuerpo de la solicitud como JSON
app.use(express.json());

// Middleware para permitir solicitudes desde cualquier origen (CORS)
app.use(cors());

// Ruta de inicio
app.get('/', (request, response) => {
  console.log(request);
  // Retorna un mensaje de bienvenida o información sobre la aplicación
  return response.status(234).send('Sistema para Almacenar Tramites de Conservacion Catastral');
});

// Define las rutas relacionadas con los trámites en el prefijo '/tramites'
app.use('/tramites', tramitesRoute);

// Conexión a la base de datos MongoDB
mongoose
  .connect(mongoDBURL) // Conecta a la URL de la base de datos MongoDB especificada en el archivo de configuración
  .then(() => {
    console.log('App conectada a la base de datos'); // Log para indicar que la conexión a la base de datos fue exitosa
    // Inicia el servidor Express para escuchar en el puerto especificado
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`); // Log para indicar que el servidor Express está escuchando en un puerto específico
    });
  })
  .catch((error) => {
    console.log(error); // Manejo de errores si la conexión a la base de datos falla
  });
