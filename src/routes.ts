import { Router } from 'express'; 
import swaggerui from 'swagger-ui-express';     
import swaggerDocument from '../docs/swagger.json';
import {Response, Request} from 'express';

import AtendimentoController from './controllers/AtendimentoController';
import AtendimentoModel from './models/AtendimentoModel';

const routes = Router();

routes.get('/atendimentos', (req: Request, res: Response) => {
    AtendimentoController.index(res);
});

routes.get('/atendimentos/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    AtendimentoModel.findById(id, res);
});

routes.post('/atendimentos', (req: Request, res: Response) => {
    const atendimento = req.body;
    AtendimentoController.create(atendimento, res);
});

routes.put('/atendimentos/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const valores = req.body;

    AtendimentoController.alter(id, valores, res);
});

routes.delete('/atendimentos/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    AtendimentoController.delete(id, res);
});


routes.use('/api-docs', swaggerui.serve);
routes.get('/api-docs', swaggerui.setup(swaggerDocument));

export default routes;