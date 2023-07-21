import { Request, Response } from "express";
import { pusher } from "../utils/index";

const postMessage = (req: Request, res: Response) => {
    const { username, message } = req.body;

    // Trigger a new message event on Pusher
    pusher.trigger('chat', 'message', {
        username,
        message,
    });

    res.status(200).json({ success: true });
};

export {
    postMessage
}