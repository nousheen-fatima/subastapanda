import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { LuAlarmClock } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { placeBid } from "../../../features/bid/bidSlice";
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
  gap: 2px;
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
  margin-bottom: 45px;
  margin-right: -10px;
  margin-left: -4px;
  z-index: 1;
`;

const RightParagraph = styled.p`
  display: flex;
  justify-content: flex-end;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  display: flex;
  gap: 4px;
`;

const AuctionContainer = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [bidValue, setBidValue] = useState("");

  const handlePlaceBid = async () => {
    if (!bidValue) {
      toast.error("Please enter a bid amount.");
      return;
    }
    try {
      await dispatch(placeBid({ bidValue, accessToken: user?.access_token }));
      toast.success("Bid placed successfully");
    } catch (error) {
      console.error("Error placing bid:", error);
      toast.error("Error placing bid");
    }
  };

  const renderBidInput = () => (
    <>
      <BidInput
        value={bidValue}
        onChange={(e) => setBidValue(e.target.value)}
      />
      <ButtonStyled variant="dark" onClick={handlePlaceBid}>
        Place Bid
      </ButtonStyled>
    </>
  );

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
              {user ? renderBidInput() : <BidInput />}
            </RightWrapper>
            <RightParagraph>
              <LuAlarmClock size={20} />
              3h:25m
            </RightParagraph>
          </RowWrapper>
        </Wrapper>
      </StyledContainer>
    </MainWrapper>
  );
};

export default AuctionContainer;
