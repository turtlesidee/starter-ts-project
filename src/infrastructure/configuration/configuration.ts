import { URL } from '@turtleside/standard';
import dotenv from 'dotenv';
import { Configuration } from './types';

dotenv.config();

const configuration: Configuration = {
    service_name: process.env.SERVICE_NAME || '',
    service_port: parseInt(process.env.SERVICE_PORT || '3000'),
    integrity_service_url: (process.env.INTEGRITY_SERVICE_URL as URL) || ('' as URL),
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
    s3_configuration: {
        access_key_id: process.env.S3_ACCESS_KEY_ID || 'access key',
        secret_access_key: process.env.S3_SECRET_ACCESS_KEY || 'secret key',
        region: process.env.S3_REGION || 'region',
        s3_bucket_name: process.env.S3_BUCKET_NAME || 'bucket name',
    },
};

export default configuration;
