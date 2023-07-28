import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";

import { Grid, GridItem } from '@chakra-ui/react';

import { GET_CHANEL_BY_USER } from "../../../api/chanels";
import {
    Box,
    Card,
    CardHeader,
    Flex,
    Heading,
    Avatar,
    AvatarBadge
} from '@chakra-ui/react';
import Chanel from "../dataDisplay/Chanel";
const initState = [
    {
        id: '123',
        name: 'my-chanel',
        member:
        {
            username: 'Robin',
        }

    },
    {
        id: '321',
        name: 'my-chanel-2',
        member:
        {
            username: 'WonderWoman',
        }
    },

]
const ChatRoom = () => {

    const [chanels, setChanels] = useState(initState);
    const [chanelActive, setChanelActive] = useState();

    /*const { loading, error, data } = useQuery(GET_CHANEL_BY_USER, {
        variables: { owner: '64c392276849dc34c2a092e7' }

    });*/

    useEffect(() => {
        const user = localStorage.getItem('USER');
        if (user) {
            const userData = JSON.parse(user);
        }
    }, [])
    /*if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

    if (data) {
        console.log(data)
    }*/
    const handleClick = idRoom => {

        setChanelActive(idRoom)
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
                {
                    chanels.map(chanel => {
                        return (

                            <Chanel key={`${chanel.id}`} id={chanel.id} username={chanel?.member?.username} onClick={handleClick} />
                        )
                    })
                }
            </GridItem>
            <GridItem pl='2' bg='green.300' area={'main'}>
                <Card maxW='md'>

                </Card>
            </GridItem>
        </Grid>
    )
}
export default ChatRoom;
