import { useState } from "react";
import { User, useAuth } from "./useAuth";
import { useNavigate, useSearchParams } from "react-router-dom";

const DEFAULT_EXP_MIN = 1;

export const Login = () => {
    const nav = useNavigate();
    const [searchParams] = useSearchParams();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useAuth();

    const handleSubmit = () => {
        if (username === "user" && password === "user") {
            const exp = new Date();
            exp.setMinutes(exp.getMinutes() + DEFAULT_EXP_MIN);
            const user = new User("sdklfjsdlkfjk", exp);
            setUser(user);

            const returnUrl = searchParams.get("return-url");
            nav(returnUrl ?? "/");
        }
    };
    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
