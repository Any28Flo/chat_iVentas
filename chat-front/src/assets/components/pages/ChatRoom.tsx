
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { Grid, GridItem } from '@chakra-ui/react';

import AddNewMessage from '../Message/AddNewMessage';
import { useAppContext } from '../../context/appContext';
import { ChanelType, GET_CHANEL_BY_USER } from '../../api/Chanel';

import Chanels from '../dataDisplay/Chanels';
import Chat from "../dataDisplay/Chat";


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
const initState = [
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

];
type chanelActiveType = string | undefined
const ChatRoom = () => {

    const { user } = useAppContext();


    const [chanels, setChanels] = useState<ChanelType>(initState)
    const [chanelActive, setChanelActive] = useState<chanelActiveType>(undefined);
    const [messages, setMessages] = useState(messagesArray)

    const handleSend = (data: string) => {
        console.log(data);

    }
    const { loading, error, data } = useQuery(GET_CHANEL_BY_USER, {
        variables: { owner: user.id }

    });



    const handleClick = (idChanel: string) => {

        setChanelActive(idChanel)

    }
    useEffect(() => {
        if (chanelActive) {
            console.log(chanelActive);
        }

    }, [chanelActive])

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
                    initState.length === 0 ? (<p>Array is empty.</p>) :
                        (initState.map(chanel => {
                            return <Chanels key={chanel.id} member={chanel.member} onClick={handleClick} />

                        }))
                }
            </GridItem>
            <GridItem pl='2' bg='green.300' area={'main'} width="100%" >
                {
                    chanelActive ?
                        <>
                            {
                                messages.length !== 0 ?
                                    (messages.map(message => <Chat key={message.id} message={message} />))
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
