import { useState } from "react";
import { POST_LOGIN_QUERY } from "./../../../api/user";
import { useMutation } from "@apollo/client";

type FormData = {
    email: string,
    password: string

}
const initState = {
    email: '',
    password: ''
}


const Home = () => {
    const [addTodo, { data, loading, error }] = useMutation(POST_LOGIN_QUERY);

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

    const [login, setFormData] = useState<FormData>(initState);

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        // router.push("/chat");
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>

        </>
    )
}
export default Home;
