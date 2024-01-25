import { faFilter, faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

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
  const StyledButton = styled(Button)`
    background-color: white;
    border: 2px solid #000;
    color: #000;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    gap: 8px;

    &:hover {
      background-color: #f0f0f0;
      border-color: #000;
      color: #000;
    }
  `;
  const ButtonContainer = styled.div`
    display: flex;
    gap: 8px;
  `;

  return (
    <Container>
      <Row>
        <Col>
          <HeadingContainer>
            <HeadingText>Upcoming Auction</HeadingText>
            <ButtonContainer>
              <StyledButton>
                <FontAwesomeIcon icon={faSort} />
                Sort By
              </StyledButton>
              <StyledButton>
                <FontAwesomeIcon icon={faFilter} />
                Filters
              </StyledButton>
            </ButtonContainer>
          </HeadingContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default UpcomingAuctionBar;
