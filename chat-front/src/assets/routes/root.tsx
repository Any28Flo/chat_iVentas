import { createBrowserRouter, } from "react-router-dom";
import { lazy } from 'react';



const Layout = lazy(() => import('../components/layout/Layout'));
const Home = lazy(() => import('../components/pages/Home'));
const ChatRoom = lazy(() => import('../components/pages/ChatRoom'));
const router = createBrowserRouter([

    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/chat-room',
                element: <ChatRoom />
            }
        ]
    },

]);

export default router;