"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var file_repsitory_1 = __importDefault(require("../repositories/file.repsitory"));
var FileManager = /** @class */ (function () {
    function FileManager() {
        this.repository = new file_repsitory_1.default();
    }
    FileManager.prototype.getAll = function (owner, calback) {
        return this.repository.getAll(owner, calback);
    };
    FileManager.prototype.getById = function (id, calback) {
        return this.repository.getbyId(id, calback);
    };
    FileManager.prototype.add = function (data, calback) {
        return this.repository.add(data, calback);
    };
    FileManager.prototype.remove = function (id, owner, calback) {
        return this.repository.remove(id, owner, calback);
    };
    FileManager.prototype.update = function (data, calback) {
        return this.repository.update(data, calback);
    };
    return FileManager;
}());
exports.default = FileManager;
//# sourceMappingURL=file.manager.js.map