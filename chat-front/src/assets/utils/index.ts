import Pusher from 'pusher-js';

import { ApolloClient, InMemoryCache } from '@apollo/client';

const PUSHER_APP_ID = import.meta.env.VITE_APP_PUSHER_APP_ID;
const PUSHER_KEY = import.meta.env.VITE_APP_PUSHER_KEY;
const PUSHER_SECRET = import.meta.env.VITE_APP_PUSHER_SECRET;
const PUSHER_CLUSTER = import.meta.env.VITE_APP_PUSHER_CLUSTER;
const APOLLO_URI = import.meta.env.VITE_APP_APOLLO_URI;

export const pusherClient = new Pusher(PUSHER_KEY, {
    // appId: PUSHER_APP_ID,
    // secret: PUSHER_SECRET,
    cluster: PUSHER_CLUSTER,
});

export const apolloClient = new ApolloClient({
    uri: APOLLO_URI,
    cache: new InMemoryCache(),
});