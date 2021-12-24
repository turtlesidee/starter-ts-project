import { Collection } from 'mongodb';
import { Types } from 'ably';
import RealtimeChannelCallbacks = Types.RealtimeChannelCallbacks;
import { S3 } from 'aws-sdk';
import { S3Configuration } from '../infrastructure/configuration/types';

export type Environment = {
    //db_collection: Collection;
    //ably_channel: RealtimeChannelCallbacks;
    //s3_client: S3;
    //s3_configuration: S3Configuration;
    service_name: string;
    service_port: number;
    jwt_secret: string;
};
