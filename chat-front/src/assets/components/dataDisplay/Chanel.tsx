import {
    Box,
    Card,
    CardHeader,
    Flex,
    Heading,
    Avatar,
    AvatarBadge
} from '@chakra-ui/react';
interface ChanelProps {
    username: string | undefined
    onClick: () => void
    id: string
}
const Chanel = ({ username, onClick, id }: ChanelProps) => {
    return (
        <Card maxW='md' mb='4' onClick={(e) => onClick(id)}  >
            <CardHeader>
                <Flex spacing='4'>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>

                        <Avatar size='sm' name='Kent Dodds' src='https://bit.ly/kent-c-dodds'>
                            <AvatarBadge boxSize='1.25em' bg='green.500' />
                        </Avatar>

                        <Box>
                            <Heading size='sm'>{username}</Heading>

                        </Box>
                    </Flex>
                </Flex>
            </CardHeader >
        </Card >
    )
}
export default Chanel;
