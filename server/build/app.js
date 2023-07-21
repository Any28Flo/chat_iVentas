"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class App {
    constructor() {
        this.express = (0, express_1.default)();
        this.middlewares();
        this.routes();
    }
    middlewares() {
    }
    routes() {
    }
    listen(PORT) {
        this.express.listen(PORT);
        console.log('⚡️[server]: SERVER IS UP ON PORT:', PORT);
    }
}
exports.default = new App();
