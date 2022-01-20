import {Response, Request } from 'express';
import IAtendimento from '../interfaces/Atendimento';
import AtendimentoModel from '../models/AtendimentoModel';

class Atendimento {
    public async alter(id: number, valores: any, res: Response): Promise<Response> {
        return AtendimentoModel.atualizarAtendimento(id, valores, res);
    }

    public async index(resp: Response): Promise<void> {
        return AtendimentoModel.buscarTodosAtendimentos(resp);
    }


    public async create(atendimento: IAtendimento, resp: Response): Promise<Response> {
        return AtendimentoModel.adiciona(atendimento, resp);
    }
}

export default new Atendimento();