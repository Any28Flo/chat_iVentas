import { useNavigate } from "react-router-dom";

import { POST_LOGIN_QUERY } from "../../../api/user";
import { useMutation } from "@apollo/client";
import FormLogin from "../FormLogin";




const Home = () => {
    const [login, { loading, error }] = useMutation(POST_LOGIN_QUERY,);
    const navigate = useNavigate();

    function onSubmit(e) {
        e.preventDefault();

        const { email, password } = e.target.elements;

        login(
            {
                variables: { email: email.value, password: password.value }
                , onCompleted: (data) => {
                    console.log(data);
                    const user = {
                        token: data.token,
                        data: {
                            email: data.email,
                            phone: data.phone,
                            username: data.username
                        }
                    }
                    localStorage.setItem('USER', JSON.stringify(user));
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
