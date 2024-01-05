import {
  faBell,
  faSignInAlt,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import subastaPandaLogo from "../assets/subastapanda.png";
import userProfileImage from "../assets/user_image.jpeg";
const UserProfileButton = styled.div`
  background: url(${userProfileImage}) center/cover no-repeat;
  width: 30px;
  height: 30px;
  margin-right: 5px;
  border: 2px solid black;
  border-radius: 8px;
  overflow: hidden;
`;
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 20px; /* Adjust the font-size as needed */
  margin-right: 10px;
`;
export default function App() {
  return (
    <div>
      <Navbar expand="lg" bg="white">
        <Container>
          <Navbar.Brand href="#home">
            <Image
              src={subastaPandaLogo}
              alt="SubastaPanda"
              style={{ marginRight: "10px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">All categories</Nav.Link>
              <Nav.Link href="#c++">Products</Nav.Link>
              <Nav.Link href="#android">Contact us</Nav.Link>
              <Nav.Link href="#spring">About us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className="ml-auto">
            <Button variant="dark" style={{ marginRight: "10px" }}>
              Sell
            </Button>
            <Nav.Link href="#">
              <StyledFontAwesomeIcon icon={faWallet} />
            </Nav.Link>
            <Nav.Link href="#">
              <StyledFontAwesomeIcon icon={faBell} />
            </Nav.Link>
            <Nav.Link href="#" style={{ marginRight: "10px" }}>
              <UserProfileButton />
            </Nav.Link>
            <Nav.Link href="#" style={{ marginRight: "10px" }}>
              Login | Signup
            </Nav.Link>
            <Nav.Link href="#">
              <StyledFontAwesomeIcon icon={faSignInAlt} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
