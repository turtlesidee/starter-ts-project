import http from 'http';

export interface HttpServer {
    listen: (port: number, callback: () => void) => http.Server;
}
