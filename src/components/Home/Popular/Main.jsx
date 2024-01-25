import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import PopularContainer from "./PopularSection/PopularContainer";

const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  padding-top: 80px;
`;

const Heading = styled.h6`
  color: black;
  font-size: 55px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const StyledButton = styled(Button)`
  border-radius: 25px;
  padding: 15px 20px;
  font-size: 30px;
  margin-top: 40px;
`;

const Main = () => {
  return (
    <Wrapper>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Heading>
            Making Buying and Selling Hassle-free, With our Trusted Sellers that
            you rate and review.
          </Heading>
          <StyledButton variant="dark" className="btn-lg btn-block">
            Explore Auction Panda
          </StyledButton>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12}>
          <PopularContainer />
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Main;
