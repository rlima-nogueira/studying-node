import { Router } from 'express'; 

import AtendimentoController from './controllers/AtendimentoController';

const routes = Router();

routes.get('/atendimentos', AtendimentoController.index);

export default routes;