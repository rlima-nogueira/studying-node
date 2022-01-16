import express from 'express'; 
import cors from 'cors';

class App {
    public express: express.Application;

    public constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    private middleware(): void {
        this.express.use(express.json());
        this.express.use(cors());
        this.express.use(express.Router());
    }

    private routes(): void {}
}