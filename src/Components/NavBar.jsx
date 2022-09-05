import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <header className="container-fluid header">
      <div className="row d-flex align-items-center justify-content-around container2">
        <p className="p col-md-3 offset-1">
          H2 <span>gamers</span>
        </p>
        <div className="col-md-4">
          <div className="container-fluid">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
        
      </div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Procesadores
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Placas de Video
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Almacenamientos
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Perifericos
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Monitores
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Sillas Gamers
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link1">Arma tu PC</Nav.Link>
              <Nav.Link href="#link2">Novedades</Nav.Link>
              <Nav.Link href="#link3">Ofertas</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <CartWidget/>
      </Navbar> 
    </header>
  );
};
export default NavBar;
