export type Configuration = {
    service_name: string;
    service_port: number;
    jwt_secret: string;
    integrity_service_url: string;
    mongo_configuration: MongoConfiguration;
    ably_configuration: AblyConfiguration;
    s3_configuration: S3Configuration;
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

export type S3Configuration = {
    access_key_id: string;
    secret_access_key: string;
    region: string;
    s3_bucket_name: string;
};
