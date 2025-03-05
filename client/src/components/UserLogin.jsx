import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import api from "../api/api"


//Login page!
//TODO: Does not check for success! Check for it!
const UserLogin = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const HandleLogin = async (e) => {
        try {
            e.preventDefault(); //don't refresh
            const body = {
                    username,
                    password,
            }
            api.post("users/login", body)
                .then(function (response) {
                    console.log(response);
                    localStorage.setItem("authToken",response.data.token);
                    alert("Login Success!");
                    navigate("/");
                })
                .catch(function (err) {
                    console.log("Error!");
                    console.log(err);
                });
        }
        catch(err) {
            console.error(err.message);
        }

    }

    return (
        <div>
            <form onSubmit={HandleLogin}>
                <label for="username">Username</label><br/>
                <input type="text" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)}></input><br/>
                <label for="password">Password</label><br/>
                <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)}></input><br/>
                <button type="submit" style={{marginTop: '10px', marginBottom: '30px'}}>Login</button>
            </form>
        </div>
    );
}

export default UserLogin;