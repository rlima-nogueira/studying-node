export default interface IAtendimento {
    id: number; 
    cliente: string;
    pet?: string;
    servico: string;
    status: string;
    observacoes?: string;
}