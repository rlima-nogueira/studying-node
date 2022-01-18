import Atendimento from '../interfaces/Atendimento'
import conexao from '../config/db';

class AtendimentoModel {
    
    public adiciona(atendimento: Atendimento) {
        const sql = `INSERT INTO Atendimentos SET ?`;

        conexao.query(sql, atendimento, (erro, retorno) => {
            if (erro) {
                return console.log(erro);
            }
            return console.log(retorno);
        })
    }

}

export default new AtendimentoModel();