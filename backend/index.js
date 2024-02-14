import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import tramitesRoute from './routes/tramitesRoute.js';
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());


app.use(cors());


app.get('/', (request, response) => {
  console.log(request);
  //return response.status(234).send('Sistema para Almacenar Tramites de Conservacion Catastral');
  return request
});

app.use('/tramites', tramitesRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App conectada al la base de Datos');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
