import 'reflect-metadata';
import express from 'express';
import routes from './routes';
import './database';

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('🚀 Server started and running on http://localhost:3333/');
});

/**
 * Persistência <-> Repository <-> Rota
 */
