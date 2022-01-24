export default interface IAtendimento {
    id: number; 
    cliente: string;
    pet?: string;
    servico: string;
    data?: string;
    dataEditada?: string;
    dataCriacao: string;
    status: string;
    observacoes?: string;
}