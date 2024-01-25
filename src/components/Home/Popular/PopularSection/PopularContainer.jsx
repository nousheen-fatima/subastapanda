import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import HeadingBar from "../../../Ui/HeadingBar";
import PopularListSlider from "./PopularSlider";

const Wrapper = styled.div`
  width: 90vw;
  min-height: 70vh;
  padding-bottom: 70px;
`;

const PopularContainer = () => {
  return (
    <Wrapper>
      <Container>
        <HeadingBar heading={"Popular Categories"} />
      </Container>
      <PopularListSlider />
    </Wrapper>
  );
};

export default PopularContainer;
