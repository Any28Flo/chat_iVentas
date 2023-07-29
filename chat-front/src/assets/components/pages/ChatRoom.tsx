
import {
    Box,
    Card,
    CardHeader,
    Flex,
    Heading,
    Avatar,
    AvatarBadge,
    CardBody,
    Text
} from '@chakra-ui/react';

import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";

import { Grid, GridItem } from '@chakra-ui/react';

import { GET_CHANEL_BY_USER } from "../../../api/chanels";

import Chanel from "../dataDisplay/Chanel";
import AddNewMessage from '../Message/AddNewMessage';
import { useAppContext } from '../../context/appContext';


const messagesArray = [
    {
        _id: "ase123",
        content: 'hello',
        chanel: 'my-chanel-2',
        owner: {
            username: 'Batman'
        }

    },
    {
        _id: "ase124",
        content: 'hello Batman',
        chanel: 'my-chanel-2',
        owner: {
            username: 'WonderWoman'
        }

    }
]
const initState = [
    {
        id: '123',
        name: 'my-chanel',
        member:
        {
            username: 'Robin',
        },
        messages: messagesArray

    },
    {
        id: '321',
        name: 'my-chanel-2',
        member:
        {
            username: 'WonderWoman',
        },
        messages: messagesArray
    },

];
const ChatRoom = () => {
    const { user } = useAppContext();
    console.log(user);


    const [chanels, setChanels] = useState(initState);
    const [chanelActive, setChanelActive] = useState();
    const [messages, setMessages] = useState(messagesArray)
    const [isLoading, setIsLoading] = useState(false);

    const handleSend = data => {
        console.log(data);

    }

    /*const { loading, error, data } = useQuery(GET_CHANEL_BY_USER, {
        variables: { owner: '64c392276849dc34c2a092e7' }

    });*/

    /*if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

    if (data) {
        console.log(data)
    }*/
    const handleClick = idChanel => {
        setIsLoading(true)
        if (chanelActive) {
            const filteredArray = initState.filter(item => item.id === idChanel);
            setMessages(filteredArray.messages)
            setChanelActive(filteredArray)
        }

        setIsLoading(false)
        //const messagesActives = initState
        //setMessages
    }
    useEffect(() => {

    }, [chanelActive, messages])

    if (isLoading) return '....cargando';

    return (
        <Grid
            templateAreas={`"nav main"`}
            height='100%'
            gridTemplateRows={'1fr 1fr'}
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
            <GridItem pl='2' bg='green.300' area={'main'} width="100%" >

                {
                    messages.map(message => {
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
                    })
                }
                {
                    <AddNewMessage onSend={handleSend} />
                }

            </GridItem>
        </Grid >
    )
}
export default ChatRoom;
