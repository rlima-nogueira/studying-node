export default interface IAtendimento {
    id: number; 
    cliente: string;
    pet?: string;
    servico: string;
    data?: Date;
    dataCriacao: Date;
    status: string;
    observacoes?: string;
}