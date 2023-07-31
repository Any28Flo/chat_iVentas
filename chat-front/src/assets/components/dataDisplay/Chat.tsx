import {
    Card,
    Flex,
    Avatar,
    Text
} from '@chakra-ui/react';

import { MessageProps } from '../../api/Chat';

const Chat = ({ data }: MessageProps) => {
    const { content } = data;
    return (
        <Card maxW='md' mb='4'   >
            <Flex spacing='4'>
                <Avatar
                    name="Computer"
                    src=""
                    bg="blue.300"
                ></Avatar>
                <Flex
                    bg="gray.100"
                    color="black"
                    my="1"
                    p="3"
                    width="100%"
                >
                    <Text>{content}</Text>
                </Flex>
            </Flex>

        </Card>
    )
}

export default Chat;