import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HeadingBar from "../../../Ui/HeadingBar";
import PopularListSlider from "./PopularSlider";

const Wrapper = styled.div`
  width: 90vw;
  min-height: 70vh;
  padding-bottom: 70px;
`;

const PopularContainer = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <HeadingBar
          heading={"Popular Categories"}
          onClick={() => navigate("/category")}
        />
      </Container>
      <PopularListSlider />
    </Wrapper>
  );
};

export default PopularContainer;
