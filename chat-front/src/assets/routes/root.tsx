import { createBrowserRouter, } from "react-router-dom";
import Home from "../components/pages/Home";
import ChatRoom from "../components/pages/ChatRoom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/chat-room",
        element: <ChatRoom />
    },
]);

export default router;