interface Message {
    id: string,
    content: string;
    timestamp: string;
}

const messages: Message[] = [];


const sendMessage = (content: string): Message => {
    const timestamp = new Date().toISOString();
    const newMessage: Message = { id: (messages.length + 1).toString(), content, timestamp };

    /**
     * TODO:
     * - Save the message to the database 
     */
    messages.push(newMessage);

    return newMessage;
};

export {
    messages,
    sendMessage,
    Message
}