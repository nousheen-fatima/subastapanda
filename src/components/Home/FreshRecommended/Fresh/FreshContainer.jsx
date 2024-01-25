import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import HeadingBar from "../../../Ui/HeadingBar";
import RecommendedCarousel from "./RecommendedCarousel";

const Wrapper = styled.div`
  width: 100%;
  min-height: 70vh;
`;

const FreshContainer = () => {
  return (
    <Wrapper>
      <Container>
        <HeadingBar heading={"Fresh Recommendation"} />
        <RecommendedCarousel />
      </Container>
    </Wrapper>
  );
};

export default FreshContainer;
