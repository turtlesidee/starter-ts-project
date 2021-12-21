import dotenv from 'dotenv';
import { Configuration } from './types';

dotenv.config();

const configuration: Configuration = {
    service_name: process.env.SERVICE_NAME || '',
    service_port: parseInt(process.env.SERVICE_PORT || '3000'),
    jwt_secret: process.env.JWT_SECRET || 'private key',
    mongo_configuration: {
        uri: process.env.MONGO_URI || 'uri',
        user: process.env.MONGO_USER || 'user',
        password: process.env.MONGO_PASSWORD || 'pwd',
        database: process.env.MONGO_DATABASE || 'database',
    },
    ably_configuration: {
        api_key: process.env.ABLY_API_KEY || 'key',
        channel_name: process.env.ABLY_CHANNEL_NAME || 'channel_name',
        channel_secret: process.env.ABLY_CHANNEL_SECRET || 'channel_secret',
    },
};

export default configuration;
