import { Environment } from './domain/types';
import configuration from './infrastructure/configuration/configuration';
import { create_http_server } from './infrastructure/server/http_server';

const main = async () => {
    const env: Environment = {
        service_name: configuration.service_name,
        service_port: configuration.service_port,
        jwt_secret: configuration.jwt_secret,
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
