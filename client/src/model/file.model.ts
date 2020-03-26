import config from './../../config.json';
import grpc from 'grpc';

const PROTO_PATH = __dirname + config.proto_path;

export default class FileModel {

    private service: any;
    private client: any;

    constructor() {
        this.service = grpc.load(PROTO_PATH);
        this.client = new this.service.proto.AddService(config.server_host + ":" + config.server_port,  grpc.credentials.createInsecure());
    }

    public getFileModel() {
        return this.client;
    }

}