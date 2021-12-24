import { Router } from 'express';
import { Environment } from '../../../domain/types';
import { health_check_action } from '../controller/meta/health_check_action';

export default (env: Environment): Router => {
    const meta_router = Router();

    meta_router.get('/health_check', health_check_action(env));

    return meta_router;
};
