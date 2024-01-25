import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Image } from "react-bootstrap";
import styled from "styled-components";
import subastaPandaLogo from "../assets/subastapanda.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 60px;
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
  font-size: 20px;
`;

const Link = styled.a`
  color: #7e7e7e;
  font-size: 18px;
  text-decoration: none;

  /* &:hover {
    color: rgb(0, 153, 255);
    transition: 200ms ease-in;
    text-decoration: none;
  } */
`;

const Icon = styled.i`
  font-size: 24px;
`;
const StyledHr = styled.hr`
  background-color: #7c4dff;
  height: 2px;
`;
const CopyrightRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #7e7e7e;
`;
const FollowLinks = styled.div`
  display: flex;
  gap: 30px;
`;
const Heading = styled.h5`
  color: #a5a5a5;
`;

const Main = styled.footer`
  background-color: white;
  border-top: 1px solid #a5a5a5;
  padding: 10px;
`;
const ImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: auto;
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
      <Container>
        <Wrapper>
          <Row>
            <Column>
              <Title>Action Panda</Title>
              <Link href="#">Help</Link>
              <Link href="#">About Us</Link>
              <Link href="#">Affilate</Link>
              <Link>Jobs Press</Link>
              <Link>Our Blog</Link>
              <Link>Collectors Portal</Link>
            </Column>
            <Column>
              <Title href="#">Buying With Auction Panda</Title>
              <Link href="#">Place Your Bid</Link>
              <Link href="#">Expert</Link>
              <Link href="#">Fair business Practice</Link>
              <Link href="#">Law Enforecement Guideline</Link>
              <Link href="#">Buyer Team</Link>
            </Column>
            <Column>
              <Title href="#">Selling With Auction Panda</Title>
              <Link href="#">Selling At Auction</Link>
              <Link href="#">Photo Tip</Link>
              <Link href="#">Seller Terms</Link>
              <Link href="#">Submission Guideline</Link>
            </Column>
            <div>
              <ImageDiv>
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
              </ImageDiv>
            </div>
          </Row>
          <Column>
            <StyledHr />

            <CopyrightRow>
              <p>Terms of Use</p>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
              <p>Responsible Disclosure</p>
              <p>©2023</p>
            </CopyrightRow>
          </Column>
        </Wrapper>
      </Container>
    </Main>
  );
};

export default Footer;
