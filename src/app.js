import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import dotenv from 'dotenv';
dotenv.config();

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';

import swaggerUI from 'swagger-ui-express'; 
import swaggerJsdoc from 'swagger-jsdoc'; 

import path from 'path';
import __dirname from './utils/index.js';

const swaggerOptions = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'API USUARIOS, MASCOTAS Y ADOPCIONES',
      description: 'Documentacion de la API para gestionar usuarios, mascotas y adopciones',
      version: '1.0.0',
    },
  },
  apis: [path.join(__dirname, '../routes/*.js')],

};

const specs = swaggerJsdoc(swaggerOptions);


const app = express();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

 mongoose.connect(MONGO_URL);

app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);

app.use('/apidocs', swaggerUI.serve, swaggerUI.setup(specs));

app.listen(PORT,()=>console.log(`Listening on ${PORT}`));

console.log(path.join(__dirname, '/routes/*.js'));

export default app;