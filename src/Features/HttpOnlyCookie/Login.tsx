import { useContext, useRef } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import AuthContext, { login } from "./AuthContext";
import { AuthService } from "./AuthService";
import { fetchEmployees } from "./fetchEmployees";

const Login = () => {
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const contextValue = useContext(AuthContext);
    console.log(contextValue);
    const loginSubmit = async () => {
        let payload = {
            userId: email.current!.value,
            password: password.current!.value,
        };
        console.log("loginSubmit", payload);
        await new AuthService().login(payload);
    };


    const getClick = () => { fetchEmployees().then(v => console.log(v)); };
    const readCookieClick = () =>{
        console.log(document.cookie);
    };
    return (
        <>
            <Container className="mt-2">
                <Row>
                    <Col className="col-md-8 offset-md-2">
                        <legend>Login Form</legend>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" ref={email} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPasswor">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={password} />
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={loginSubmit}>
                            Login
                        </Button>

                        <Button variant="primary" type="button" onClick={getClick}>
                            Get
                        </Button>

                        <Button variant="primary" type="button" onClick={readCookieClick}>
                            Read Cookie
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default Login;