import {Response, Request} from 'express';
import IAtendimento from '../interfaces/Atendimento';
import AtendimentoModel from '../models/AtendimentoModel';

class Atendimento {


    public async index(req: Request, resp: Response): Promise<Response> {
        return resp.send('Subi a API');
    }

    public async create(atendimento: IAtendimento, resp: Response): Promise<void> {
        return AtendimentoModel.adiciona(atendimento, resp);
    }
}

export default new Atendimento();