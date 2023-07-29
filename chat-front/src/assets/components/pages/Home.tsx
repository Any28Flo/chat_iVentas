import { useNavigate } from "react-router-dom";

import { useMutation } from "@apollo/client";
import FormLogin from "../FormLogin";
import { useAppContext } from "../../context/appContext";
import { POST_LOGIN_QUERY } from "../../api/User";




const Home = () => {
    const { dispatch } = useAppContext();

    const [login, { loading, error }] = useMutation(POST_LOGIN_QUERY,);
    const navigate = useNavigate();

    function onSubmit(e) {
        e.preventDefault();

        const { email, password } = e.target.elements;

        login(
            {
                variables: { email: email.value, password: password.value }
                , onCompleted: ({ login }) => {

                    dispatch({
                        type: 'login',
                        payload: {
                            token: login.token,
                            user: {
                                id: login.user_info._id,
                                email: login.user_info.email,
                                phone: login.user_info.phone,
                                username: login.user_info.username
                            }
                        }
                    })

                    localStorage.setItem('USER', JSON.stringify(login));
                    navigate("/chat-room");
                }
            },);

    }


    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

    return (
        <>
            <FormLogin onSubmit={onSubmit} />
        </>

    )
}
export default Home;
