import { useEffect, useState } from "react";
import MessagesList from "../Message/MessagesList";
import Chanels from "../dataDisplay/Chanels";
import { useMutation, useQuery } from "@apollo/client";

import { Grid, GridItem } from '@chakra-ui/react';
import { GET_CHANEL_BY_USER } from "../../../api/chanels";
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
    const { loading, error, data } = useQuery(GET_CHANEL_BY_USER, {
        variables: { owner: '64c392276849dc34c2a092e7' }

    });

    useEffect(() => {
        const user = localStorage.getItem('USER');
        if (user) {
            const userData = JSON.parse(user);
        }



    }, [])
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

    if (data) {
        console.log(data)
    }
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
