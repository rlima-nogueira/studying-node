import {Response, Request} from 'express';
import AtendimentoModel from '../models/AtendimentoModel';

class Atendimento {


    public async index(req: Request, resp: Response): Promise<Response> {
        return resp.send('Subi a API');
    }

    public async create(req: Request, resp: Response): Promise<Response> {
        const atendimento = req.body;
        AtendimentoModel.adiciona(atendimento);
        return resp.send(req.body);
    }
}

export default new Atendimento();