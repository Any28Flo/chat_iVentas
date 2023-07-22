import { Request, Response } from 'express';
import { sendMessage } from '../models/messageModel';
import { pusher } from '../susbscriptions/messageSubscription';

export const handleSendMessage = (req: Request, res: Response) => {
    const { username, message } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Content is required' });
    }

    // Call the model function to save the new message
    const newMessage = sendMessage(message);

    return res.status(200).json(newMessage);
};


const triggerEvent = (req: Request, res: Response) => {
    const { username, message } = req.body;

    // Trigger a new message event on Pusher
    pusher.trigger('chat', 'message', {
        username,
        message,
    });

    res.status(200).json({ success: true });
};