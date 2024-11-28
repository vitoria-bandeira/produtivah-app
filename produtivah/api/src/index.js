import 'dotenv/config';

//import { connection } from './repository/connection.js';


import usuario from './controller/usuario.js';
import tarefa from './controller/tarefa.js'

import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());

server.use(usuario);
server.use(tarefa);

server.listen(process.env.PORT, () => console.log(`api on na porta ${process.env.PORT}`));