import { useNavigate } from "react-router-dom";

import { POST_LOGIN_QUERY } from "../../../api/user";
import { useMutation } from "@apollo/client";
import FormLogin from "../FormLogin";


type FormData = {
    email: string,
    password: string

}

const Home = () => {
    const [login, { data, loading, error }] = useMutation(POST_LOGIN_QUERY,);
    const navigate = useNavigate();
    /**
     * 
     * TODO:
     * - add data to context
     */
    function onSubmit(loginData: FormData) {
        login(
            {
                variables: { email: loginData.email, password: loginData.password }
                , onCompleted: () => {
                    console.log(":D")
                    navigate("/chat-room");
                }
            },);

    }


    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;


    return (
        <>
            <h2>Login</h2>
            <FormLogin onSubmit={onSubmit} />
            {/* {error.graphQLErrors.map(({ message: string }, i) => (
                <span key={i}>{message}</span>
            ))} */}

        </>
    )
}
export default Home;
