"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_json_1 = __importDefault(require("./../../config.json"));
var grpc_1 = __importDefault(require("grpc"));
var PROTO_PATH = __dirname + config_json_1.default.proto_path;
var FileModel = /** @class */ (function () {
    function FileModel() {
        this.service = grpc_1.default.load(PROTO_PATH);
        this.client = new this.service.proto.AddService(config_json_1.default.server_host + ":" + config_json_1.default.server_port, grpc_1.default.credentials.createInsecure());
    }
    FileModel.prototype.getFileModel = function () {
        return this.client;
    };
    return FileModel;
}());
exports.default = FileModel;
//# sourceMappingURL=file.model.js.map