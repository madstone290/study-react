import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

interface LayoutProps {
    children?: React.ReactNode
}

const Layout = (pros: LayoutProps) => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand as={Link} to="/">
                    JWT HTTP-Only Cookie
                </Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/login">
                        Login
                    </Nav.Link>
                </Nav>
            </Navbar>
            <Container>{pros.children}</Container>
        </>
    );
};
export default Layout;