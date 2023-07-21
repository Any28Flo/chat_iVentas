"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pusher = void 0;
const pusher_1 = __importDefault(require("pusher"));
const config_1 = __importDefault(require("../../config"));
const pusher = new pusher_1.default({
    appId: config_1.default.APP_ID,
    key: config_1.default.KEY,
    secret: config_1.default.SECRET,
    cluster: config_1.default.CLUSTER,
    useTLS: true,
});
exports.pusher = pusher;
