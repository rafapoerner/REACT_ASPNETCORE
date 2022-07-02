import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

export default function Menu() {
    return (
        <div>
            <Navbar bg='primary' expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Activities</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Clientes</Nav.Link>
                            <Nav.Link href="#link">Atividades</Nav.Link>
                        </Nav>
                        <Nav>
                            <NavDropdown title="Rafael" id="basic-nav-dropdown" align='end'>
                                <NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Configurações</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Sair</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
