import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { LuAlarmClock } from "react-icons/lu";
import styled from "styled-components";
import BidInput from "../../Ui/PlaceBid";

const MainWrapper = styled.div`
  width: 100%;
  min-height: 1200px;
  background: url("https://images.pexels.com/photos/7809123/pexels-photo-7809123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2s")
    center/cover no-repeat;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContainer = styled(Container)`
  background-color: white;
  opacity: 0.9;
  width: 80%;
  max-width: 950px;
  height: auto;
  border-radius: 30px;
  margin-right: 80px;
  margin-top: 400px;

  @media (max-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 992px) {
    width: 95%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
    margin-right: 0;
  }
`;

const Wrapper = styled(Container)`
  padding: 40px 0px;
  width: 90%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Count = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  color: #000;
`;

const Paragraph = styled.p`
  line-height: normal;
  margin-bottom: 20px;
  letter-spacing: 4px;
  font-size: 2rem;
  color: #000;
`;

const BoldParagraph = styled.p`
  margin-top: 40px;
  font-size: 2rem;
  font-weight: 600;
  color: #000;
`;
const Bid = styled.p`
  font-size: 2rem;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const RightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  align-items: center;
`;

const ButtonStyled = styled(Button)`
  padding: 10px 20px;
  border-radius: 10px;
  margin-right: -10px;
  margin-left: -4px;
  z-index: 1;
`;

const RightParagraph = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  display: flex;
  gap: 8px;
`;

const AuctionContainer = () => {
  return (
    <MainWrapper>
      <StyledContainer>
        <Wrapper>
          <Title>
            Auction's Ending Soon
            <FontAwesomeIcon icon={faChevronRight} className="ms-1" />
          </Title>
          <BoldParagraph>Comic's</BoldParagraph>
          <Paragraph>
            <span>Make Buy & sell hassle-free,With</span>
            <br />
            <span>your trusted sellers that</span>
            <br /> you rate & review
          </Paragraph>
          <RowWrapper>
            <Row>
              <Bid>Current Bid</Bid>
              <Count>$2200</Count>
            </Row>
            <RightWrapper>
              <BidInput />
              <ButtonStyled variant="dark">Enter Bid</ButtonStyled>
            </RightWrapper>
            <RightParagraph>
              <LuAlarmClock size={"20"} />
              3h:25m
            </RightParagraph>
          </RowWrapper>
        </Wrapper>
      </StyledContainer>
    </MainWrapper>
  );
};

export default AuctionContainer;
