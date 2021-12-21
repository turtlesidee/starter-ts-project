export type Configuration = {
    service_name: string;
    service_port: number;
    jwt_secret: string;
    mongo_configuration: MongoConfiguration;
    ably_configuration: AblyConfiguration;
};

export type MongoConfiguration = {
    uri: string;
    user: string;
    password: string;
    database: string;
};

export type AblyConfiguration = {
    api_key: string;
    channel_name: string;
    channel_secret: string;
};
