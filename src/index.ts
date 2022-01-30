import {
    connect_to_ably,
    connect_to_ably_channel,
    connect_to_collection,
    connect_to_mongodb,
} from '@turtleside/standard';
import { Environment } from './domain/types';
import configuration from './infrastructure/configuration/configuration';
import { create_http_server } from './infrastructure/server/http_server';

const main = async () => {
    const ably_client = connect_to_ably(configuration.ably_configuration.api_key);
    const main_channel = connect_to_ably_channel(
        ably_client,
        configuration.ably_configuration.channel_name,
        configuration.ably_configuration.channel_secret,
    );

    const mongo_client = await connect_to_mongodb(configuration.mongo_configuration);
    const db_collection = connect_to_collection(
        mongo_client,
        configuration.mongo_configuration.database,
        'db_collection',
    );

    const env: Environment = {
        db_collection,
        main_channel,
        service_name: configuration.service_name,
        service_port: configuration.service_port,
        jwt_secret: configuration.jwt_secret,
        integrity_service_url: configuration.integrity_service_url,
    };

    const http_server = create_http_server(env);

    const server = http_server.listen(configuration.service_port, () => {
        console.log(`http server start on ${configuration.service_port}`);
    });

    process.on('SIGTERM', () => {
        //do not handle any more request on that server
        server.close(() => {
            console.log('http server closed');
        });

        // close mongodb connection
        // send message to dispatcher to remove channel between them
        process.exit(0);
    });
};

main();
