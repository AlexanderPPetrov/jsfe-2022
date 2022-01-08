import {Navbar, Container, Nav} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

function NavBar () {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">Master Course 2022</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <LinkContainer to="/">
                    <Nav.Link href="/">Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/movies">
                    <Nav.Link href="/movies">Movies</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/tvseries">
                    <Nav.Link href="/tvseries">TV Series</Nav.Link>
                </LinkContainer>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavBar;