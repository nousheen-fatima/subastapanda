import React from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import { BiCalendarStar } from "react-icons/bi";
import { LuAlarmClock } from "react-icons/lu";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 40px;
`;

const StyledCard = styled(Card)`
  height: 400px;
  margin-bottom: 8px;
  width: 100%;
`;

const Image = styled(Card.Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
`;

const Title = styled.h1`
  font-size: 1.125rem;
  font-weight: 600;
  color: #000;
  display: flex;
  justify-content: space-between;
`;

const Count = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  color: #000;
`;

const Paragraph = styled.p`
  color: #7e7e7e;
  margin-bottom: 0;
`;

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const LeftParagraph = styled.p`
  font-size: 1rem;
  color: #333;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ButtonStyled = styled(Button)`
  margin-bottom: 8px;
  padding: 10px 20px;
  border-radius: 10px;
`;

const RightParagraph = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  display: flex;
  gap: 8px;
`;

const SpecialAuctionItems = ({ title, image_url, count }) => {
  return (
    <StyledContainer>
      <StyledCard>
        <Image src={image_url} alt="image_url" />
      </StyledCard>
      <Wrapper>
        <Title>
          {title}
          <BiCalendarStar size={30} />
        </Title>
        <Paragraph>Starting Price</Paragraph>
        <Count>${count}</Count>
      </Wrapper>
      <RowWrapper>
        <Row>
          <Paragraph>Entry Fee</Paragraph>
          <LeftParagraph>10 silver</LeftParagraph>
        </Row>
        <RightWrapper>
          <ButtonStyled variant="dark">Enter Bid</ButtonStyled>
          <RightParagraph>
            <LuAlarmClock size={"20"} />
            3h:25m
          </RightParagraph>
        </RightWrapper>
      </RowWrapper>
    </StyledContainer>
  );
};

export default SpecialAuctionItems;
