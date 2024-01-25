import { useState } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import subastaPandaLogo from "../assets/subastapanda.png";

const StyledNavbar = styled(Navbar)`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(Button)`
  border-radius: 10px;
  padding: 10px;
  width: 70px;
`;

function getUser() {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return null;
}

export default function App() {
  const { user, setUser } = useState(getUser());
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  return (
    <div>
      <StyledNavbar expand="lg" bg="white">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="brand-link">
              <Image
                src={subastaPandaLogo}
                alt="SubastaPanda"
                style={{ marginRight: "10px" }}
              />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/category" className="nav-link">
                All categories
              </Nav.Link>
              <Nav.Link as={Link} to="/products" className="nav-link">
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link">
                Contact us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className="ml-auto">
            <StyledButton variant="dark" style={{ marginRight: "10px" }}>
              Sell
            </StyledButton>
            {user ? (
              <>
                <h4>
                  Hello,{user.firstName} {user.lastName}
                </h4>
                <h5>{user.email}</h5>
                <Button variant="danger" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <Nav.Link as={Link} to="/login" style={{ marginRight: "10px" }}>
                Login |
              </Nav.Link>
            )}

            <Nav.Link as={Link} to="/signup" style={{ marginLeft: "-20px" }}>
              Signup
            </Nav.Link>
          </Nav>
        </Container>
      </StyledNavbar>
    </div>
  );
}
