import React from "react";
import { Card, Container } from "react-bootstrap";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  width: 100%;
`;

const StyledCard = styled(Card)`
  height: 400px;
  width: 400px;
  margin-bottom: 20px;
`;

const Image = styled(Card.Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h1`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #000;
`;

const Count = styled.p`
  font-size: 0.875rem;
  color: #333;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PopularCards = ({ title, image_url, product_count }) => {
  return (
    <StyledContainer>
      <StyledCard>
        <Image src={image_url} alt="image_url" />
      </StyledCard>
      <Wrapper>
        <Title>{title}</Title>
        <Count>{product_count} Products</Count>
      </Wrapper>
    </StyledContainer>
  );
};

export default PopularCards;
