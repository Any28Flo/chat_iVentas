import { useState } from 'react';
import {
    Alert,
    AlertIcon,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Text,
} from '@chakra-ui/react';
import { useForm, FieldError } from 'react-hook-form';
import { ValidationError } from './ValidationError';

type FormData = {
    email: string,
    password: string

}
const FormLogin = ({ onSubmit }: any) => {

    const [error, setError] = useState(false);

    /*
    TODO:
    - handle errors
     {errors && (
                        <Alert justifyContent='center' status='error'>
                            <AlertIcon />
                            Correo o contraseña incorrectos
                        </Alert>
                    )}

    */
    const handleClick = () => {
        console.log(":D");

    }
    return (
        <>
            <Flex align='center' bgGradient='linear(to-r, green.200, pink.500)' justify='center' minH='100vh'>
                <Card as='form' borderRadius='none' onSubmit={onSubmit}>


                    <CardHeader px={{ base: '4', lg: '12' }} py={{ base: '4', lg: '8' }}>
                        <Text
                            align='center'
                            fontWeight='semibold'
                            fontSize='xl'
                            letterSpacing='wider'
                            textTransform='uppercase'
                        >
                            Inicia sesión
                        </Text>
                    </CardHeader>
                    <CardBody
                        as={Flex}
                        flexDir='column'
                        gap='8'
                        px={{ base: '4', lg: '12' }}
                        w={{ base: 'full', md: 'md' }}
                    >
                        <FormControl>
                            <FormLabel>Correo electrónico</FormLabel>
                            <Input
                                name='email'
                                onClick={handleClick}
                                placeholder='Correo electrónico'
                                required
                                size='lg'
                                type='email'
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="password">Contraseña</FormLabel>
                            <Input
                                name='password'
                                onClick={handleClick}
                                placeholder='Contraseña'
                                required
                                size='lg'
                                type='password'
                            />
                        </FormControl>
                    </CardBody>
                    <CardFooter px={{ base: '4', lg: '12' }} py={{ base: '4', lg: '8' }}>
                        <Button
                            colorScheme='teal'
                            mx='auto'
                            size='lg'
                            type='submit'
                            variant='outline'
                            _hover={{
                                bg: 'yellow.500',
                                borderColor: 'linear(to-l, #7928CA, #FF0080)',
                                color: 'white',
                                fontWeight: 'semibold',
                            }}
                        >
                            Iniciar sesión
                        </Button>
                    </CardFooter>
                </Card>
            </Flex >
        </>

    )

}

export default FormLogin;