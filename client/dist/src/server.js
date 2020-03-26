"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var file_controller_1 = __importDefault(require("./controllers/file.controller"));
function loggerMiddleware(request, response, next) {
    console.log(request.method + " " + request.path);
    next();
}
var app = new app_1.default([
    new file_controller_1.default()
], 5000);
function sleep(time, callback) {
    var stop = new Date().getTime();
    while (new Date().getTime() < stop + time) {
        ;
    }
    callback();
}
sleep(6000, function () {
    app.listen();
});
//# sourceMappingURL=server.js.map