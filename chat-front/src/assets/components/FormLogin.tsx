
import { useForm, FieldError } from 'react-hook-form';
import { ValidationError } from './ValidationError';

type FormData = {
    email: string,
    password: string

}
const FormLogin = ({ onSubmit }: any) => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        mode: 'onBlur',
        reValidateMode: 'onBlur',
    });

    function getEditorStyle(fieldError: FieldError | undefined) {
        return fieldError ? 'border-red-500' : '';
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="email">Ingresa tu email</label>
                    <input
                        type="email"
                        id="email"
                        {...register('email', {
                            required: 'email es requerido',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Debes ingresar una email valido',
                            },
                        })}
                    />
                    <ValidationError fieldError={errors.email} />
                </div>
                <div>
                    <label htmlFor="password">Ingresa tu contrasena</label>
                    <input
                        type="password"
                        id="password"
                        {...register('password', {
                            required: 'password es requerido',

                        })}
                    />
                </div>
                <button type='submit'>Inicia sesion</button>
            </form>
        </>

    )

}

export default FormLogin;