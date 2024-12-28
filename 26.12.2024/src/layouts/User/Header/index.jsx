import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-dark">
            <Container className='cont'>
                <img src="https://t4.ftcdn.net/jpg/06/28/58/05/360_F_628580537_1GCrnuKP1I8Z2q4vit2QTgP18m89yr5d.jpg" alt="" width={30} />
                <Navbar.Brand href="#home" className="text-white fw-bold">CLient</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className="text-white">Home</Nav.Link>
                        <Nav.Link href="#link" className="text-white">Contacts</Nav.Link>
                        <Nav.Link href="#link" className="text-white">About</Nav.Link>
                        <Nav.Link href="#link" className="text-white">Products</Nav.Link>
                
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header