import { useEffect } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useNavigate, Outlet } from "react-router-dom";

import {
    Box,
    Button,
    Container,
    Drawer,
    DrawerBody,
    DrawerContent,
    Flex,
    IconButton,
    Image,
    useDisclosure,
} from '@chakra-ui/react';
import Icon from './../../styles/imgs/chat-icon.png'
const Layout = () => {
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const logout = () => {
        localStorage.removeItem('USER');
        navigate('/login');
    };

    useEffect(() => {
        const user = localStorage.getItem('USER');
        if (!user) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <Box bg='#F5F5F5' color='white' minH='100vh'>
            <Container
                as={Flex}
                flexDir='column'
                gap={{ base: '8', lg: '16' }}
                maxW='container.xl'
                p='4'
                pb='16'
            >
                <Flex align='center' justify='space-between'>
                    <Image
                        maxW={{ base: '40', lg: '64' }}
                        src={Icon}
                        w='full'
                    />
                    <IconButton
                        aria-label='icon'
                        fontSize='2xl'
                        icon={<HamburgerIcon />}
                        onClick={onOpen}
                        size='lg'
                        variant='outline'
                        _hover={{
                            bg: '#F07E28',
                        }}
                    />
                </Flex>
                <Outlet />
            </Container>

            <Drawer isOpen={isOpen} onClose={onClose}>
                <DrawerContent>
                    <DrawerBody as={Flex} flexDir='column' gap='8' px='4' py='12'>
                        <Image

                            borderRadius='lg'
                            src={Icon}
                            w='full'
                        />
                        <Flex as='nav' flex='1' flexDir='column' gap='4'>
                        </Flex>
                        <Button
                            colorScheme='yellow'
                            onClick={logout}
                            size='lg'
                            variant='outline'
                            _hover={{
                                bg: '#F07E28',
                                borderColor: '#F07E28',
                                color: 'white',
                                fontWeight: 'semibold',
                            }}
                        >
                            Cerrar sesión
                        </Button>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
}
export default Layout;
