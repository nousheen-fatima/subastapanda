import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import UpcomingAuctionBar from "../../Ui/UpcomingAuctionBar";
import UpcomingCarousel from "./UpcomingCarousel";

const Wrapper = styled.div`
  width: 100%;
  min-height: 70vh;
`;

const UpcomingContainer = () => {
  return (
    <Wrapper>
      <Container>
        <UpcomingAuctionBar />
        <UpcomingCarousel />
      </Container>
    </Wrapper>
  );
};

export default UpcomingContainer;
