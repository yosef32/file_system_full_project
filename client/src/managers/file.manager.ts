import FileRepository from '../repositories/file.repsitory';
import File from '../interfaces/file.interface';

export default class FileManager {

    private repository: FileRepository;

    constructor() {
        this.repository = new FileRepository();
    }

    public getAll(owner: string, calback) {
        return this.repository.getAll(owner, calback);
    }

    public getById(id: string, calback) {
        return this.repository.getbyId(id, calback);
    }

    public add(data: File, calback) {
        return this.repository.add(data, calback);
    }

    public remove(id: string, owner: string, calback) {
        return this.repository.remove(id, owner, calback);
    }

    public update(data: File, calback) {
        return this.repository.update(data, calback);
    }

}