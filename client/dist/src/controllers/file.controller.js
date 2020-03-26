"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var file_manager_1 = __importDefault(require("../managers/file.manager"));
var FileController = /** @class */ (function () {
    function FileController() {
        var _this = this;
        this.path = '/file';
        this.router = express.Router();
        this.all = function (req, res) {
            var owner = req.params.owner;
            _this.manager.getAll(owner, function (error, files) {
                if (error) {
                    res.send(error);
                }
                else {
                    res.json(files);
                }
            });
        };
        this.get = function (req, res) {
            var id = req.params.id;
            _this.manager.getById(id, function (error, file) {
                if (error) {
                    res.send(error);
                }
                else {
                    res.json(file);
                }
            });
        };
        this.add = function (req, res) {
            var data = req.body;
            console.log(data);
            _this.manager.add(data, function (error, file) {
                if (error) {
                    res.send(error);
                }
                else {
                    res.json(file);
                }
            });
        };
        this.delete = function (req, res) {
            var id = req.body.id;
            var owner = req.body.owner;
            console.log(id);
            _this.manager.remove(id, owner, function (error, file) {
                if (error) {
                    res.send(error);
                }
                else {
                    res.json(file);
                }
            });
        };
        this.update = function (req, res) {
            var data = req.body;
            _this.manager.update(data, function (error, file) {
                if (error) {
                    res.send(error);
                }
                else {
                    res.json(file);
                }
            });
        };
        this.manager = new file_manager_1.default();
        this.intializeRoutes();
    }
    FileController.prototype.intializeRoutes = function () {
        this.router.get('/all/:owner', this.all);
        this.router.get('/:id', this.get);
        this.router.post('/', this.add);
        this.router.delete('/', this.delete);
        this.router.put('/', this.update);
    };
    return FileController;
}());
exports.default = FileController;
//# sourceMappingURL=file.controller.js.map