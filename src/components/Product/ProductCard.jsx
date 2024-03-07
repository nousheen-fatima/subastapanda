import React, { useState } from "react";
import { Button, Card, Container, Image, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { LuAlarmClock } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { placeBid } from "../../features/bid/bidSlice";
import BidInput from "../Ui/PlaceBid";
const StyledContainer = styled(Container)`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledCard = styled(Card)`
  height: 400px;
  margin-bottom: 8px;
  width: 100%;
  cursor: pointer;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
`;

const Title = styled.h1`
  font-size: 1.125rem;
  font-weight: 600;
  color: #000;
`;

const Price = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  color: #000;
`;

const Paragraph = styled.p`
  color: #7e7e7e;
  font-size: 16px;
  margin-bottom: 0;
`;

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
const ProductCard = ({ title, image_url, price, product_Id }) => {
  const { user } = useSelector((state) => state.auth);
  const isloggedIn = user?.access_token;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [bidValue, setBidValue] = useState("");

  const handlePlaceBid = async () => {
    try {
      await dispatch(
        placeBid({
          productId: product_Id,
          bidValue,
          accessToken: user.access_token,
        })
      );
      toast.success("Bid placed successfully");
    } catch (error) {
      console.error("Error placing bid:", error);
      toast.error("Error placing bid");
    }
  };
  return (
    <StyledContainer>
      <StyledCard onClick={() => navigate(`/products/${product_Id}`)}>
        <StyledImage src={image_url} alt="image_url" />
      </StyledCard>
      <Wrapper>
        <Title>{title}</Title>
        <Paragraph>Starting Price</Paragraph>
        <Price>${price}</Price>
      </Wrapper>
      {isloggedIn ? (
        <RowWrapper>
          <Row>
            <BidInput
              value={bidValue}
              onChange={(e) => setBidValue(e.target.value)}
            />
          </Row>
          <RightWrapper>
            <ButtonStyled variant="dark" onClick={handlePlaceBid}>
              Place Bid
            </ButtonStyled>
            <RightParagraph>
              <LuAlarmClock size={"20"} />
              3h:25m
            </RightParagraph>
          </RightWrapper>
        </RowWrapper>
      ) : (
        <RowWrapper>
          <Row>
            <span>Entry Fee</span>
            <span>10 silver</span>
          </Row>
          <RightWrapper>
            <ButtonStyled variant="dark">Enter Bid</ButtonStyled>
            <RightParagraph>
              <LuAlarmClock size={"20"} />
              3h:25m
            </RightParagraph>
          </RightWrapper>
        </RowWrapper>
      )}
    </StyledContainer>
  );
};

export default ProductCard;
