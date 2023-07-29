import {
    Card,
    Flex,
    Avatar,
    Text
} from '@chakra-ui/react';

import { MessageProps } from '../../api/Message';

const Chat = ({ message }: MessageProps) => {

    return (
        <Card maxW='md' mb='4'   >
            <Flex spacing='4'>
                <Avatar
                    name="Computer"
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                    bg="blue.300"
                ></Avatar>
                <Flex
                    bg="gray.100"
                    color="black"
                    my="1"
                    p="3"
                    width="100%"
                >
                    <Text>{message.content}</Text>
                </Flex>
            </Flex>

        </Card>
    )
}

export default Chat;