import * as express from 'express';
import App from './app'

import FileController from "./controllers/file.controller"

function loggerMiddleware(request: express.Request, response: express.Response, next) {
    console.log(`${request.method} ${request.path}`);
    next();
}

const app = new App(
    [
        new FileController()
    ],
    5000
);

function sleep(time, callback) {
    var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {
        ;
    }
    callback();
}

sleep(2000, function() {
    app.listen();
 });

