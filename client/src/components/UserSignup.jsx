import React, {useState} from "react";
import api from "../api/api"
import { useNavigate } from 'react-router-dom';
const UserSignup = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const HandleSignup = async (e) => {
        e.preventDefault(); //don't refresh
            const body =
                {
                    username,
                    password,
                    email
                }
        try {
            api.post("users/signup", body)
                .then(function (response) {
                console.log(response);
                console.log("Navigating to signup success");
                // if succesful, show signup success screen
                navigate("/signup-success");
                })
                .catch(function (err) {
                console.log(err);
                navigate("/signup-failure");
                });
        }
        catch(err) {
            console.error(err.message);
            navigate("/signup-failure");
        }

    }

    return (
        <div>
            <form onSubmit={HandleSignup}>
                <label htmlFor="email">Email</label><br/>
                <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)}></input><br/>
                <label htmlFor="username">Username</label><br/>
                <input type="text" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)}></input><br/>
                <label htmlFor="password">Password</label><br/>
                <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)}></input><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UserSignup;