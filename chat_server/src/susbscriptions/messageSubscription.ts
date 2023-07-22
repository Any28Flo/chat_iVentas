// Implement your logic to handle real-time functionality using Pusher
// For example, listening for new messages and sending them via Pusher

import { Request, Response } from "express";
import Pusher from 'pusher';
import config from "../config";

const pusher = new Pusher({
    appId: config.APP_ID,
    key: config.KEY,
    secret: config.SECRET,
    cluster: config.CLUSTER,
    useTLS: true,
});

export { pusher }

const postMessage = (req: Request, res: Response) => {
    const { username, message } = req.body;

    // Trigger a new message event on Pusher
    pusher.trigger('chat', 'message', {
        username,
        message,
    });

    res.status(200).json({ success: true });
};