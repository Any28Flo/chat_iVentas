
import { useEffect, useState } from "react";
import { useMutation, useQuery, useSubscription } from "@apollo/client";

import { Grid, GridItem } from '@chakra-ui/react';

import AddNewMessage from '../Message/AddNewMessage';
import { useAppContext } from '../../context/appContext';
import { Chanel, GET_CHANEL_BY_USER } from '../../api/Chanel';

import Chanels from '../dataDisplay/Chanels';

import { GET_MESSAGES_QUERY, NEW_MESSAGE_SUBSCRIPTION, SEND_MESSAGE } from "../../api/Chat";
import Chat from "../dataDisplay/Chat";


import Pusher from 'pusher-js'

type chanelActiveType = string;

const ChatRoom = () => {

    const { user } = useAppContext();

    console.log(user);

    const [chanelActive, setChanelActive] = useState<chanelActiveType>('');
    const [messages, setMessages] = useState([]);


    const { data: chanelData } = useQuery(GET_CHANEL_BY_USER, {
        variables: { userId: user.id }
    });

    const { data: chatsData, refetch } = useQuery(GET_MESSAGES_QUERY, {
        variables: { chanelId: chanelActive }

    });
    const [sendMessage, { data }] = useMutation(SEND_MESSAGE);

    const { data: newMessageData } = useSubscription(NEW_MESSAGE_SUBSCRIPTION);


    const handleSend = (data: string) => {
        sendMessage({
            variables: { content: data, sender: user.id, chanel: chanelActive }
        })

    }

    const handleClick = (idChanel: string) => {
        setChanelActive(idChanel)
    }
    useEffect(() => {
        if (newMessageData) {
            // Handle new messages here
            console.log('New Message:', newMessageData.newMessage);
        }
    }, [newMessageData]);


    useEffect(() => {
        if (chanelActive !== '') {
            refetch({ chanelId: chanelActive })

        }

    }, [chanelActive])

    useEffect(() => {


        const pusher = new Pusher(import.meta.env.VITE_APP_PUSHER_APP_ID, {
            cluster: 'us2'
        });
        const channel = pusher.subscribe('my-channel');
        console.log(channel);
        Pusher.logToConsole = true;
        channel.bind('new-message', (data) => {
            console.log("Chanel" + data);

        })

        return () => {
            pusher.unsubscribe('my-channel');
            pusher.disconnect();
        };
    }, [])
    if (loading) return <p>Loading...</p>;

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
                        (chanelData.getChanels.chanels.map((chanel: Chanel, index) => {
                            return <Chanels key={`chanels-${index}`} participants={chanel.participants} onClick={handleClick} idChanel={chanel._id} />

                        }))
                        : ''
                }
            </GridItem>
            <GridItem pl='2' bg='green.300' area={'main'} width="100%" >
                {
                    chatsData && chanelActive !== '' ?
                        <>
                            <h1>DSD</h1>
                            {
                                chatsData.getMessages.length !== 0 ?
                                    chatsData.getMessages.map((message, idx) => {
                                        console.log(message);

                                        return <Chat key={`message-${idx}`} data={message} />
                                    })
                                    : "Aún no tienes mensajes"
                            }
                            {
                                <AddNewMessage onSend={handleSend} />
                            }


                        </>
                        : ""
                }
            </GridItem>
        </Grid >
    )
}
export default ChatRoom;
