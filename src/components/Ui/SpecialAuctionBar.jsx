import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BiCalendarStar } from "react-icons/bi";
import styled from "styled-components";

const HeadingBar = () => {
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
    display: flex;
    align-items: center;
    gap: 8px;
  `;

  const SeeAllLink = styled.p`
    color: #000000;
    font-weight: 600;
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    gap: 8px;
    align-items: center;
    transition: color 0.3s;

    &:hover {
      color: #007bff;
    }
  `;

  return (
    <Container>
      <Row>
        <Col>
          <HeadingContainer>
            <HeadingText>
              <BiCalendarStar />
              Special Auction
            </HeadingText>
            <SeeAllLink>
              See all
              <FontAwesomeIcon icon={faChevronRight} className="ms-1" />
            </SeeAllLink>
          </HeadingContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default HeadingBar;
