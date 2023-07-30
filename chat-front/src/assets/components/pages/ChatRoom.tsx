
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { Grid, GridItem } from '@chakra-ui/react';

import AddNewMessage from '../Message/AddNewMessage';
import { useAppContext } from '../../context/appContext';
import { Chanel, ChanelType, GET_CHANEL_BY_USER } from '../../api/Chanel';

import Chanels from '../dataDisplay/Chanels';
import Chat from "../dataDisplay/Chat";
import { GET_MESSAGES_QUERY } from "../../api/Chat";


const messagesArray = [
    {
        id: "ase123",
        content: 'hello',
        chanel: 'my-chanel-2',
        owner: {
            username: 'Batman',
            id: 'asdf21',
            email: 'sdfasdf',
            phone: '123'
        },
        from: "Batman"

    },
    {
        id: "ase124",
        content: 'hello Batman',
        chanel: 'my-chanel-2',
        owner: {
            username: 'wonder woman',
            id: 'asdf21',
            email: 'sdfasdf',
            phone: '123'

        },
        from: "Wonder woman"

    }
]
const initState = {
    chanels: [
        {
            id: '123',
            name: 'my-chanel',
            member:

            {
                username: 'Robin',
                id: '12asdf',
                email: 'sdfasdf',
                phone: '123'
            }


        },
        {
            id: '321',
            name: 'my-chanel-2',
            member:

            {
                username: 'wonder woman',
                id: 'asdf21',
                email: 'sdfasdf',
                phone: '123'

            }
        },

    ],
    numChanels: 2
}
type chanelActiveType = string | undefined
const ChatRoom = () => {

    const { user } = useAppContext();

    const [chanels, setChanels] = useState<ChanelType>(initState)
    const [chanelActive, setChanelActive] = useState<chanelActiveType>(undefined);
    const [messages, setMessages] = useState(messagesArray)

    const handleSend = (data: string) => {
        console.log(data);

    }

    const { loading, error, data: chanelData } = useQuery(GET_CHANEL_BY_USER, {
        variables: { userId: user.id }
    });

    const { loading: loadMsg, error: errorsMsg, data: chatsData, refetch } = useQuery(GET_MESSAGES_QUERY, {
        variables: { chanelId: chanelActive }
    });
    const handleClick = (idChanel: string) => {
        setChanelActive(idChanel)
        refetch({ chanelId: idChanel })

    }

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
                    chanelData ?
                        (chanelData.getChanels.chanels.map((chanel: Chanel) => {
                            console.log(chanel)
                            return <Chanels key={chanel.id} participants={chanel.participants} onClick={handleClick} id={chanel.id} />

                        }))
                        : ''
                }
            </GridItem>
            <GridItem pl='2' bg='green.300' area={'main'} width="100%" >
                {
                    chanelActive ?
                        <>
                            {
                                chatsData.getMessages.length !== 0 ?
                                    (chatsData.getMessages.map(message => <Chat key={message.id} message={message} />))
                                    : ""
                            }
                            {
                                <AddNewMessage onSend={handleSend} />
                            }

                        </> : ""

                }


            </GridItem>
        </Grid >
    )
}
export default ChatRoom;
