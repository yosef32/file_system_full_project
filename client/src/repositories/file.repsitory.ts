import FileModel from './../model/file.model'
import File from './../interfaces/file.interface';

export default class GroupRepository {

    private model: FileModel;

    constructor() { 
        this.model = new FileModel();
    }

//     client.ListFiles({"owner" : "1"}, function(error, files) {
//     if (error)
//       console.log('Error: ', error);
//     else
//       console.log(files);
//   });

    public getAll(owner: string, calback) {
        this.model.getFileModel().ListFiles({"owner" : owner}, calback);
    }

    public add(object: File, calback) {

        this.model.getFileModel().Create({
            "file" : object
        }, calback)
    }

    public remove(id:string, owner: string, calback) {
        this.model.getFileModel().Delete({
            "id" : id,
            "owner" : owner
        }, calback)
    }

    public getbyId(id, calback) {
        this.model.getFileModel().Read({"id" : id}, calback)
    }

    public async update(object: File, calback) {
        this.model.getFileModel().Update({
            "file" : object
        }, calback)
    }
}

