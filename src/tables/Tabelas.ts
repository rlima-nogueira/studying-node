import conexao from '../config/db';

class Tabela {

    public init(): void {
        this.criarAtendimentos();
    }

    private criarAtendimentos(): void {
        const sql = `CREATE TABLE IF NOT EXISTS Atendimentos (
                id INT NOT NULL AUTO_INCREMENT, 
                cliente VARCHAR(50) NOT NULL, 
                pet VARCHAR(20),
                servico VARCHAR(20) NOT NULL, 
                status VARCHAR(20) NOT NULL,
                observacoes TEXT, 
                PRIMARY KEY(id)
            )`;

        conexao.query(sql, e => {
            if (e) {
                return console.log(e);
            }
        
            return console.log('Tabela de atendimentos criada com sucesso!');
        });
    }
}
            

export default new Tabela();