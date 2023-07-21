"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const PORT = 8080 | config_1.default.PORT;
const chatController_1 = require("./src/controllers/chatController");
// Controllers
app.post('/message', chatController_1.postMessage);
app.listen(PORT, () => {
    console.log('SERVER IS UP ON PORT:', PORT);
});
