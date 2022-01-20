import {Response, Request } from 'express';
import IAtendimento from '../interfaces/Atendimento';
import AtendimentoModel from '../models/AtendimentoModel';

class Atendimento {

    public async index(resp: Response): Promise<void> {
        return AtendimentoModel.buscarTodosAtendimentos(resp);
    }


    public async create(atendimento: IAtendimento, resp: Response): Promise<Response> {
        return AtendimentoModel.adiciona(atendimento, resp);
    }
}

export default new Atendimento();