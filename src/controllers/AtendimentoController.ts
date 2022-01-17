import {Response, Request} from 'express';

class Atendimento {


    public async index(req: Request, resp: Response): Promise<Response> {
        return resp.send('Subi a API');
    }
}

export default new Atendimento();