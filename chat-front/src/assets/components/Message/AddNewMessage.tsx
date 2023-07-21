import { JSX, KeyboardEvent, useState } from "react";
import { NewMessageFormContainer, NewMessageInput, NewMessageButton } from "../styles";

type AddNewMessageType = {
    onSend: (text: string) => void;

}
const AddNewMessage = (props: AddNewMessageType): JSX.Element => {

    const [text, setText] = useState('');

    const { onSend } = props;
    const handleAddText = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSend(text)
        }
    }
    return (
        <NewMessageFormContainer>
            <NewMessageInput
                value={text}
                onChange={e => setText(e.target.value)}
                onKeyUp={handleAddText}
            />
            <NewMessageButton onClick={() => onSend(text)}>
                +
            </NewMessageButton>
        </NewMessageFormContainer>
    );
}

export default AddNewMessage;

