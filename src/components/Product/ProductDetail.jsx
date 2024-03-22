import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { BsEye } from "react-icons/bs";
import { LuAlarmClock } from "react-icons/lu";
import styled from "styled-components";
import Chat from "../Chats/Chat";

const Main = styled(Row)`
  display: flex;
  gap: 10px;
  margin-top: 60px;
  margin-bottom: 60px;
`;

const MainHeading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

const Heading = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;

const DescHeading = styled.h5`
  font-weight: bold;
`;

const CenterColumn = styled(Col)`
  position: relative;
`;

const DescriptionContainer = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  color: black;
`;

const ProfileImageContainer = styled.div`
  position: absolute;
  padding: 12px;
  top: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  gap: 10px;
`;

const ImageProfile = styled(Col)`
  color: #fff;
  display: flex;
  flex-direction: column;
  line-height: 1px;
`;

const ProfileImage = styled(Image)`
  object-fit: cover;
  border-radius: 40px;
`;
const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;
const BottomImageDescription = styled(Row)`
  position: absolute;
  bottom: 10px;
  gap: 8px;
  color: #fff;
`;
const SContainer = styled(Row)`
  color: #fff;
`;
const BidContainer = styled(Row)`
  display: flex;
  color: #fff;
`;
const RightBidContainer = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
`;
const LeftBidContainer = styled(Col)``;
const Viewer = styled.span`
  display: flex;
  gap: 4px;
  background-color: #000;
  color: white;
`;
const BidTime = styled.span`
  display: flex;
  gap: 4px;
`;

const ChatContainer = styled(Col)``;

const ProductDetail = ({ product }) => {
  return (
    <Container>
      <MainHeading>
        <Heading>Listing Details</Heading>
      </MainHeading>
      <Main>
        <DescriptionContainer>
          <DescHeading>Description</DescHeading>
          <p>{product.item_description}</p>
          <DescHeading>Shipping&Payment</DescHeading>
          <DescHeading>Payment Option</DescHeading>
          <p>{product.payment_option}</p>
          <DescHeading>Shipping Option</DescHeading>
          <p>{product.shipping_option}</p>
        </DescriptionContainer>
        <CenterColumn>
          <Image
            src={product?.main_image?.image_path}
            alt="Product Image"
            width="390px"
            height="800px"
            style={{ objectFit: "cover" }}
          />
          <ImageOverlay />
          <ProfileImageContainer>
            <ProfileImage
              src="https://www.slazzer.com/static/images/upload/sample-1.jpg"
              alt="user profile Image"
              width="40px"
              height="40px"
            />
            <ImageProfile>
              <h6>Noshi</h6>
              <span>⭐️ 4.8</span>
            </ImageProfile>
            <Viewer
              style={{
                backgroundColor: "black",
                padding: "8px",
                color: "white",
              }}
            >
              <BsEye size="25" />
              167
            </Viewer>
          </ProfileImageContainer>
          <BottomImageDescription>
            <SContainer>
              <LeftBidContainer>
                <h6>{product.title}</h6>
                <p>condition: {product.condition_description}</p>
              </LeftBidContainer>
              <RightBidContainer>
                <span>Current Price</span>
                <span>${product.final_price}</span>
              </RightBidContainer>
            </SContainer>
            <p>{product.item_description}</p>
            <span>Category: {product?.category?.title}</span>
            <br />
            <BidContainer>
              <LeftBidContainer>
                <h6>Entry Fee</h6>
                <p>10 silver</p>
              </LeftBidContainer>
              <RightBidContainer>
                <Button variant="dark">Enter Bid</Button>
                <BidTime>
                  <LuAlarmClock size="20" style={{ marginBottom: "5px" }} />
                  3h:25m
                </BidTime>
              </RightBidContainer>
            </BidContainer>
          </BottomImageDescription>
        </CenterColumn>
        <ChatContainer>
          <Chat product={product} />
        </ChatContainer>
      </Main>
    </Container>
  );
};

export default ProductDetail;
