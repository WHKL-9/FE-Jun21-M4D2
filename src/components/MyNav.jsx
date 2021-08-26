import { Nav, Navbar, Container, } from "react-bootstrap"


const MyNav = ({title}) => (
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">{title}</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#browse">Browse</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
)

export default MyNav

 