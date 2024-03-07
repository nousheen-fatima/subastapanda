import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import SortFilterButtons from "./SortFilterButtons";

const UpcomingAuctionBar = () => {
  const HeadingContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 80px;
  `;

  const HeadingText = styled.h1`
    font-size: 2rem;
    font-weight: 600;
    color: #000000;
  `;

  return (
    <Container>
      <Row>
        <Col>
          <HeadingContainer>
            <HeadingText>Upcoming Auction</HeadingText>
            <SortFilterButtons />
          </HeadingContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default UpcomingAuctionBar;
