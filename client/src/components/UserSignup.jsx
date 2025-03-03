import React, {useState} from "react";
import api from "../api/api"
const UserSignup = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const HandleSignup = async (e) => {
        try {
            e.preventDefault(); //don't refresh
            const body =
                {
                    username,
                    password,
                    email
                }
            api.post("/signup", body)
                .then(function (response) {
                console.log(response);
                })
                .catch(function (err) {
                console.log(err);
                });
        }
        catch(err) {
            console.error(err.message);
        }

    }

    return (
        <div>
            <form onSubmit={HandleSignup}>
                <label for="email">Email</label><br/>
                <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)}></input><br/>
                <label for="username">Username</label><br/>
                <input type="text" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)}></input><br/>
                <label for="password">Password</label><br/>
                <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)}></input><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UserSignup;