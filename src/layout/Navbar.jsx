import { useState } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsCartFill } from "react-icons/bs";
import { GoBell } from "react-icons/go";
import { IoWalletSharp } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import subastaPandaLogo from "../assets/subastapanda.png";
import WalletCard from "../components/Wallet/WalletCard";
import { logout } from "../features/auth/authSlice";

const StyledNavbar = styled(Navbar)`
  height: 8vh;
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
const StyledNav = styled(Nav)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`;

function getUser() {
  let user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  } else {
    user = null;
  }
}

export default function App() {
  const [user, setUser] = useState(getUser());
  const [showWallet, setShowWallet] = useState(false);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    setUser(null);
  };
  const toggleWallet = () => {
    setShowWallet(!showWallet);
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
            <StyledNav className="ml-auto">
              <Nav.Link as={Link} to="/category" className="nav-link">
                All categories
              </Nav.Link>
              <Nav.Link as={Link} to="/products" className="nav-link">
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link">
                Contact us
              </Nav.Link>
            </StyledNav>
          </Navbar.Collapse>
          <StyledNav className="ml-auto">
            <StyledButton
              variant="dark"
              style={{ marginRight: "10px" }}
              onClick={toggleWallet}
            >
              Sell
            </StyledButton>
            {user ? (
              <>
                <Nav.Link>
                  <BsCartFill size={25} />
                </Nav.Link>
                <Nav.Link>
                  <IoWalletSharp size={25} onClick={toggleWallet} />
                </Nav.Link>
                <Nav.Link>
                  <GoBell size={25} />
                </Nav.Link>

                <Image
                  src="https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg"
                  style={{ width: "30px", height: "30px", objectFit: "cover" }}
                  rounded
                />

                <Nav.Link>
                  <LuLogOut size={25} onClick={handleLogout} />
                </Nav.Link>
              </>
            ) : (
              <Nav>
                <Nav.Link as={Link} to="/login" style={{ marginRight: "10px" }}>
                  Login |
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/signup"
                  style={{ marginLeft: "-20px" }}
                >
                  Signup
                </Nav.Link>
              </Nav>
            )}
          </StyledNav>
        </Container>
      </StyledNavbar>
      {showWallet && (
        <>
          <WalletCard show={showWallet} setShow={setShowWallet} />
        </>
      )}
    </div>
  );
}
