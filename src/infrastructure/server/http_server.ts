import express, { Errback, NextFunction, Request, Response } from 'express';
import { HttpServer } from './types';
import cors from 'cors';
import helmet from 'helmet';
import { Environment } from '../../domain/types';
import meta_router from '../../application/api/router/meta_router';

export const create_http_server = (env: Environment): HttpServer => {
    const app = express();

    app.use(helmet());
    app.use(cors());
    app.use(express.json());
    app.use((error: Errback, req: Request, res: Response, next: NextFunction) => {
        next();
    });

    //routes goes here
    app.use('/meta', meta_router(env));

    return app;
};
