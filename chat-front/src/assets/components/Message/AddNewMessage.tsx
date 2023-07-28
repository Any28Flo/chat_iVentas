import { JSX, KeyboardEvent, useState } from "react";

import {
    Box,
    Flex,
    Button
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons'


import { NewMessageFormContainer, NewMessageInput, NewMessageButton } from "../styles";

type AddNewMessageType = {
    onSend: (text: string) => void;

}
const AddNewMessage = (props: AddNewMessageType) => {

    const [text, setText] = useState('');

    const { onSend } = props;
    const handleAddText = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSend(text)
        }
    }
    return (
        <Box>


            <Flex spacing='4'>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>


                    <Box>
                        <NewMessageInput
                            value={text}
                            onChange={e => setText(e.target.value)}
                            onKeyUp={handleAddText}
                        />
                    </Box>

                    <Button colorScheme='whatsapp' onClick={() => onSend(text)}>
                        <AddIcon />
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
}

export default AddNewMessage;

