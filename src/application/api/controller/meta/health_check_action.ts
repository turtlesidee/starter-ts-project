import { Environment } from '../../../../domain/types';
import { Request, Response } from 'express';

export const health_check_action =
    (env: Environment) =>
    (req: Request, res: Response): void => {
        res.send(`${env.service_name} ok`);
    };
