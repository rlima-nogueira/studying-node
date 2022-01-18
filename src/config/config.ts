import express from 'express'; 
import cors from 'cors';
import mysql from 'mysql';

import routes from '../routes';
import tabelas from '../tables/Tabelas';

class App {
    public express: express.Application;

    public constructor() {
        this.express = express();
        this.middleware();
        this.conexaoBD();
        this.routes();

        tabelas.init(this.conexaoBD);
    }

    private middleware(): void {
        this.express.use(express.json());
        this.express.use(cors());
    }

   private routes(): void {
       this.express.use(routes);
   }

   private conexaoBD(): void {
       mysql.createConnection({
           host: 'localhost',
           port: 3306,
           user: 'usuario',
           password: '1234',
           database: 'node-sql'
       })
   }
}

export default new App().express;