import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HeadingBar from "../../../Ui/HeadingBar";
import RecommendedList from "./List";
const Wrapper = styled.div`
  width: 100%;
  min-height: 70vh;
`;

const FreshContainer = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <HeadingBar
          heading={"Fresh Recommendation"}
          onClick={() => navigate("/products")}
        />
      </Container>
      <RecommendedList />
    </Wrapper>
  );
};

export default FreshContainer;
