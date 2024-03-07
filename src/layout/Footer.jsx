import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import subastaPandaLogo from "../assets/subastapanda.png";
import MobileView from "../components/Ui/MobileView";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  justify-content: center;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 20px;
  }
`;

const Column = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;
const InnerBody = styled.div`
  padding: 20px;
  border: 1px solid #7e7e7e;
  margin-top: 80px;
  margin-bottom: 10px;
`;

// const Link = styled.a`
//   color: #7e7e7e;
//   font-size: 18px;
//   text-decoration: none;

//   /* &:hover {
//     color: rgb(0, 153, 255);
//     transition: 200ms ease-in;
//     text-decoration: none;
//   } */
// `;

const Icon = styled.i`
  font-size: 20px;
`;

const FooterNav = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  gap: 30px;
  color: #7e7e7e;
`;
const FollowLinks = styled.div`
  display: flex;
  gap: 30px;
`;
const Heading = styled.h5`
  font-size: 16px;
  color: #a5a5a5;
`;
const Links = styled(Link)`
  text-decoration: none;
  color: #7e7e7e;
  line-height: 200%;

  &:hover {
    color: rgb(0, 153, 255);
    transition: 200ms ease-in;
    text-decoration: none;
  }
`;
const Main = styled.footer`
  background-color: white;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;
const Number = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #7e7e7e;
`;

const Footer = () => {
  return (
    <Main>
      <MobileView />
      <InnerBody>
        <Container>
          <Wrapper>
            <Row>
              <Column>
                <Title>Action Panda</Title>
                <Links>Help</Links>
                <Links to="/about" className="nav-link">
                  About us
                </Links>
                <Links>Affilate</Links>
                <Links>Jobs Press</Links>
                <Links>Our Blog</Links>
                <Links>Collectors Portal</Links>
              </Column>
              <Column>
                <Title href="#">Buying With Auction Panda</Title>
                <Links>Place Your Bid</Links>
                <Links>Expert</Links>
                <Links>Fair business Practice</Links>
                <Links>Law Enforecement Guideline</Links>
                <Links>Buyer Team</Links>
              </Column>
              <Column>
                <Title href="#">Selling With Auction Panda</Title>
                <Links>Selling At Auction</Links>
                <Links>Photo Tip</Links>
                <Links>Seller Terms</Links>
                <Links>Submission Guideline</Links>
              </Column>

              <RightContainer>
                <Image
                  src={subastaPandaLogo}
                  alt="SubastaPanda"
                  style={{ marginRight: "10px", width: "50%" }}
                />
                <Heading>FOLLOW US</Heading>
                <FollowLinks>
                  <Link href="https://www.facebook.com">
                    <Icon
                      className="fab fa-facebook"
                      style={{ color: "#000" }}
                    />
                  </Link>
                  <Link href="https://twitter.com">
                    <Icon
                      className="fab fa-twitter"
                      style={{ color: "#000" }}
                    />
                  </Link>
                  <Link href="https://pinterest.com">
                    <Icon
                      className="fab fa-pinterest"
                      style={{ color: "#000" }}
                    />
                  </Link>
                  <Link href="https://instagram.com">
                    <Icon
                      className="fab fa-instagram"
                      style={{ color: "#000" }}
                    />
                  </Link>
                </FollowLinks>
                <Number>
                  <FontAwesomeIcon icon={faPhone} />
                  <span>+123 467 981 111</span>
                </Number>
              </RightContainer>
            </Row>
          </Wrapper>
        </Container>
      </InnerBody>
      <Container>
        <FooterNav>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
          <p>Responsible Disclosure</p>
          <p>©2023</p>
        </FooterNav>
      </Container>
    </Main>
  );
};

export default Footer;
