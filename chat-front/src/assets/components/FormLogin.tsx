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

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        mode: 'onBlur',
        reValidateMode: 'onBlur',
    });

    function getEditorStyle(fieldError: FieldError | undefined) {
        return fieldError ? 'border-red-500' : '';
    }
    const handleClic = () => {
        console.log("clic");
    }

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
                            <FormLabel htmlFor="email">Correo electrónico</FormLabel>
                            <Input
                                type="email"
                                id="email"
                                {...register('email', {
                                    required: 'email es requerido',
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: 'Debes ingresar una email valido',
                                    },
                                })}
                                placeholder='Correo electrónico'
                                size='lg'
                                onClick={handleClic}

                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="password">Contraseña</FormLabel>
                            <Input

                                type="password"
                                id="password" name='password'
                                onClick={handleClic}
                                placeholder='Contraseña'
                                required
                                size='lg'

                            />
                        </FormControl>
                    </CardBody>
                    <CardFooter px={{ base: '4', lg: '12' }} py={{ base: '4', lg: '8' }}>
                        <Button
                            colorScheme='yellow'
                            mx='auto'
                            size='lg'
                            type='submit'
                            variant='outline'
                            _hover={{
                                bg: 'yellow.500',
                                borderColor: 'yellow.500',
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