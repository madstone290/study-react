import { useState } from "react";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";


export const Logout = () => {
    const nav = useNavigate();
    const [user, setUser] = useAuth();

    const handleSubmit = () => {
        setUser(null);
        nav("/");
    };
    return (
        <div>
            <h1>Want to logout?</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
