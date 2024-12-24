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
                <Navbar.Brand href="#home" className="text-white fw-bold">Admin</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className="text-white">Home</Nav.Link>
                        <Nav.Link href="#link" className="text-white">About Me</Nav.Link>
                        <NavDropdown
                            title={<span className="text-white">Links</span>}
                            id="basic-nav-dropdown"
                            menuVariant="dark"
                        >
                            <NavDropdown.Item href="https://github.com/Rashid1104" target="_blank" className="text-white">
                                Github
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://az.linkedin.com/" target="_blank" className="text-white">
                                linkedin
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" target="_blank" className="text-white">
                                others
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://www.youtube.com/watch?v=sr-_Pfw-Hnc" target="_blank" className="text-white">
                                the video
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header