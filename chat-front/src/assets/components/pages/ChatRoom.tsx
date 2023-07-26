import MessagesList from "../Message/MessagesList";
import { MessagesContainer } from "../styles";

const ChatRoom = (props: Messages) => {
    const { chats } = props;

    return (
        <>
            <h2>Chat room</h2>
            <MessagesContainer>
                <MessagesList chats={chats} />

            </MessagesContainer>
        </>
    )
}
export default ChatRoom;
