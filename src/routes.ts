import { Router } from 'express'; 
import {Response, Request} from 'express';

import AtendimentoController from './controllers/AtendimentoController';

const routes = Router();

routes.get('/atendimentos', AtendimentoController.index);

routes.post('/atendimentos', (req: Request, res: Response) => {
    const atendimento = req.body;
    AtendimentoController.create(atendimento, res);
});

export default routes;