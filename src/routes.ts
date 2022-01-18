import { Router } from 'express'; 

import AtendimentoController from './controllers/AtendimentoController';

const routes = Router();

routes.get('/atendimentos', AtendimentoController.index);
routes.post('/atendimentos', AtendimentoController.create);

export default routes;