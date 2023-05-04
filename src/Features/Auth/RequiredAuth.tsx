import { Login } from "Features/Auth/Login";
import { useAuth } from "./useAuth";
import { Navigate, useLocation} from "react-router-dom";

interface RequireAuthProps {
    children: JSX.Element;

}

export const RequireAuth = (props: RequireAuthProps) => {
    const [user, setUser] = useAuth();
    const locaiton = useLocation();
    console.log("user", user);
    if (user && user.validate())
        return props.children;

    return <Navigate to={`/login?return-url=${locaiton.pathname}`} />
}

