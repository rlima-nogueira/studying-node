import Atendimento from '../interfaces/Atendimento'
import conexao from '../config/db';
import { format, toDate } from 'date-fns';


class AtendimentoModel {
    
    public adiciona(atendimento: Atendimento) {
        debugger
        const dataConvertida = format(new Date(atendimento.data), "MM/dd/yyyy'T'HH:mm:ss.SSSxxx");

        atendimento.data = toDate(new Date(dataConvertida));

        const sql = `INSERT INTO Atendimentos SET ?`;
        conexao.query(sql, atendimento, (erro, retorno) => {
            if (erro) {
                return console.log(atendimento);
            }
            return console.log(retorno);
        })
    }

}

export default new AtendimentoModel();