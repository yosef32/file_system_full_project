import * as express from 'express';
import FileManager from '../managers/file.manager'
import File from './../interfaces/file.interface'

export default class FileController {

    public path = '/file';
    public router = express.Router();
    private manager: FileManager;

    constructor() {
        this.manager = new FileManager();
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.get('/all/:owner', this.all);
        this.router.get('/:id', this.get);
        this.router.post('/', this.add);
        this.router.delete('/', this.delete);
        this.router.put('/', this.update);
    }

    all = (req: express.Request, res: express.Response) => {
        const owner: string = req.params.owner;
        this.manager.getAll(owner, (error, files) => {
            if (error) {
                res.send(error);
            } else {
                res.json(files);
            }
        });
    }

    get = (req: express.Request, res: express.Response) => {
        const id: string = req.params.id;
        this.manager.getById(id, (error, file) => {
            if (error) {
                res.send(error);
            } else {
                res.json(file);
            }
        });
    }

    add = (req: express.Request, res: express.Response) => {
        const data: File = req.body;

        console.log(data)

        this.manager.add(data, (error, file) => {
            if (error) {
                res.send(error);
            } else {
                res.json(file);
            }
        });
    }

    delete = (req: express.Request, res: express.Response) => {
        const id: string = req.body.id;
        const owner: string = req.body.owner;
        console.log(id);
        this.manager.remove(id, owner, (error, file) => {
            if (error) {
                res.send(error);
            } else {
                res.json(file);
            }
        });
    }

    update = (req: express.Request, res: express.Response) => {
        const data: File = req.body;
        this.manager.update(data, (error, file) => {
            if (error) {
                res.send(error);
            } else {
                res.json(file);
            }
        });
    }
}

