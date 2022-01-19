import moment from 'moment';
import { Response } from 'express';
import Atendimento from '../interfaces/Atendimento'
import conexao from '../config/db';


class AtendimentoModel {
    
    public adiciona(atendimento: Atendimento, resp: Response) {
        atendimento.data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD');

        const sql = `INSERT INTO Atendimentos SET ?`;

        conexao.query(sql, atendimento, (erro, retorno) => {
            if (erro) {
                if (erro.errno == 1364) {
                    return resp.status(400).json(erro);
                }
                return resp.status(500).json(erro);
            }
            return resp.status(201).json(retorno);
        })
    }

}

export default new AtendimentoModel();