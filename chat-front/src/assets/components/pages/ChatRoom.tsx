import { useState } from "react";
import MessagesList from "../Message/MessagesList";
import Chanels from "../dataDisplay/Chanels";

import { Grid, GridItem } from '@chakra-ui/react';
const initState = {
    id: '123',
    name: 'my-chanel',
    members: [
        {
            username: 'Robin',

        }
    ]
}
const ChatRoom = () => {

    const [chanels, setChanels] = useState(initState);

    return (
        <Grid
            templateAreas={`
                  "nav main"`}
            height='100%'
            gridTemplateRows={'50px 1fr 30px'}
            gridTemplateColumns={'150px 1fr'}
            gap='1'
            color='blackAlpha.700'
            fontWeight='bold'
        >
            <GridItem pl='2' area={'nav'}>
                <Chanels chanels={chanels} />
            </GridItem>
            <GridItem pl='2' bg='green.300' area={'main'}>
                Last Chats
            </GridItem>
        </Grid>
    )
}
export default ChatRoom;
