"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postMessage = void 0;
const index_1 = require("../utils/index");
const postMessage = (req, res) => {
    const { username, message } = req.body;
    // Trigger a new message event on Pusher
    index_1.pusher.trigger('chat', 'message', {
        username,
        message,
    });
    res.status(200).json({ success: true });
};
exports.postMessage = postMessage;
