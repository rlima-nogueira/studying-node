import DateUtils from '../utils/DateUtils';
import { Response } from 'express';
import Atendimento from '../interfaces/Atendimento'
import conexao from '../config/db';
import IAtendimento from '../interfaces/Atendimento';


class AtendimentoModel {
    public atualizarAtendimento(id: number, valores: IAtendimento, resp: Response): Response {
        const sql = `UPDATE Atendimentos SET ? WHERE id=?`;

        valores.data = DateUtils.formatarData(valores.data);

        if (!DateUtils.isDataValida(valores.data)){
            return resp.status(400).send('Data inválida. Insira uma data maior ou igual a hoje.');
        }


        conexao.query(sql, [valores, id], (erro, retorno) => {
            if (erro) {
                resp.status(400).json(erro);
            }

          resp.status(200).json(retorno);
        });
    }

    public findById(id: number, resp: Response): void {
        const sql = `SELECT * FROM Atendimentos WHERE id=${id}`;

        conexao.query(sql, (erro, retorno) => {
            if (erro) {
                resp.status(400).json(erro);
            }

            if (retorno.length > 0) {
                resp.status(200).json(retorno);
            } else {
                resp.status(200).send('Não há resultados para esta busca.')
            }
        });
    }
    
    public adiciona(atendimento: Atendimento, resp: Response): Response {
        atendimento.data = DateUtils.formatarData(atendimento.data);

        if (!DateUtils.isDataValida(atendimento.data)){
            return resp.status(400).send('Data inválida. Insira uma data maior ou igual a hoje.');
        }

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

    public buscarTodosAtendimentos(resp: Response): void {
        const sql = `SELECT * FROM Atendimentos`;

        conexao.query(sql, (erro, retorno) => {
            if (erro) {
                resp.status(400).json(erro);
            }

            resp.status(200).json(retorno);
        });
    }

    


}

export default new AtendimentoModel();