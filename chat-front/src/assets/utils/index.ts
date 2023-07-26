import Pusher from 'pusher-js';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const PUSHER_KEY = import.meta.env.VITE_APP_PUSHER_KEY;
const PUSHER_CLUSTER = import.meta.env.VITE_APP_PUSHER_CLUSTER;

export const pusherClient = new Pusher(PUSHER_KEY, {
    cluster: PUSHER_CLUSTER,
});

export const queryClient = new ApolloClient({
    uri: import.meta.env.VITE_APP_CHAT_URI,
    cache: new InMemoryCache(),
});



