import Pusher from 'pusher';
import config from './config';

const CHAT_CHANNEL = "CHAT_CHANNEL";

const pusher = new Pusher({
    appId: config.APP_ID,
    key: config.KEY,
    secret: config.SECRET,
    cluster: config.CLUSTER
});



export { pusher }