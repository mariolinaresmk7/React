import CartWidget from "../CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./NavBar.css";

const styleNav = {
  textDecoration: "none",
  color: "black",
};

const NavBar = () => {
  return (
    <header className="container-fluid header g-0">
      <div className="row d-flex align-items-center justify-content-around container2">
        <p className="icon-title col-md-3 offset-1">
          <Link
            to="/"
            className="span-title"
            style={{ textDecoration: "none", color: "#F4F6F7" }}
          >
            H2 <span>gamers</span>
          </Link>
        </p>
        <div className="col-md-4">
          <div className="container-fluid">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
              />
              <button className="btn btn-outline-success">Buscar</button>
            </form>
          </div>
        </div>
      </div>
       <Navbar
        expand="lg"
        bg="dark"
        variant="dark"
        style={{ color: "white !important" }}
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to={"/"} style={{ textDecoration: "none" }}>
                Inicio
              </Link>
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to={"/productos/procesadores"} style={styleNav}>
                    Procesadores
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={"/productos/placas-de-video"} style={styleNav}>
                    Placas de Video
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={"/productos/almacenamiento"} style={styleNav}>
                    Almacenamiento
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={"/productos/perifericos"} style={styleNav}>
                    Perifericos
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={"/productos/monitores"} style={styleNav}>
                    Monitores
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={"/productos/sillas-gamers"} style={styleNav}>
                    Sillas Gamers
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link1">Arma tu PC</Nav.Link>
              <Nav.Link href="#link2">Novedades</Nav.Link>
              <Nav.Link href="#link3">Ofertas</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <CartWidget />
      </Navbar> 
    </header>
  );
};
export default NavBar;
