// Implement your logic to handle real-time functionality using Pusher
// For example, listening for new messages and sending them via Pusher

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
