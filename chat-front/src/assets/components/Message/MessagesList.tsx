

const MessagesList = (props: Messages) => {
    const { chats } = props;

    return (
        <>
            <h2>Chats</h2>
            <ul>
                {
                    chats.map((chat: Message, index) => {
                        return (
                            <li key={`chat-${index}`}>{chat.message} | {chat.from}</li>
                        )
                    })
                }

            </ul>
        </>
    );
}
export default MessagesList;