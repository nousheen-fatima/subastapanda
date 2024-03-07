import React from "react";
import { Button, Col, Container, Image } from "react-bootstrap";
import { BsEye } from "react-icons/bs";
import { LuAlarmClock } from "react-icons/lu";
import styled from "styled-components";
import Chat from "../Chats/Chat";

const MainHeading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

const Heading = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;

const LeftColumn = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DescHeading = styled.h5`
  font-weight: bold;
`;

const CenterColumn = styled.div`
  position: relative;
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
  margin-bottom: 80px;
  color: black;
`;

const ImageDescription = styled.div`
  position: absolute;
  top: 10px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  color: black;
`;

const ImageProfile = styled(Col)`
  color: black;
  display: flex;
  flex-direction: column;
  line-height: 1px;
`;

const ProfileImage = styled(Image)`
  object-fit: cover;
  border-radius: 40px;
`;
const BottomImageDescription = styled.div`
  position: absolute;
  bottom: 10px;
  left: 20px;
  display: flex;
  flex-direction: column;
  color: black;
`;
const SContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: black;
`;
const DContainer = styled.div`
  display: flex;
  gap: 250px;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
`;
const MainImage = styled(Image)`
  object-fit: cover;
`;
const ProductDetail = ({ product }) => {
  return (
    <Container>
      <MainHeading>
        <Heading>Listing Details</Heading>
      </MainHeading>
      <ContentContainer>
        <LeftColumn>
          <DescHeading>Description</DescHeading>
          <p>{product.item_description}</p>
          <DescHeading>Shipping&Payment</DescHeading>
          <DescHeading>Payment Option</DescHeading>
          <p>{product.payment_option}</p>
          <DescHeading>Shipping Option</DescHeading>
          <p>{product.shipping_option}</p>
        </LeftColumn>
        <CenterColumn>
          <MainImage
            src={product?.main_image?.image_path}
            alt="Product Image"
            width="450px"
            height="800px"
          />
          <ImageDescription>
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
            <span
              style={{
                backgroundColor: "black",
                padding: "8px",
                color: "white",
              }}
            >
              <BsEye size="25" />
              167
            </span>
          </ImageDescription>
          <BottomImageDescription>
            <SContainer>
              <RightContainer>
                <h6>{product.title}</h6>
                <p>condition: {product.condition_description}</p>
              </RightContainer>
              <LeftContainer>
                <span>Current Price</span>
                <span>${product.final_price}</span>
              </LeftContainer>
            </SContainer>
            <p>{product.item_description}</p>
            <span>Category: {product?.category?.title}</span>
            <br />
            <DContainer>
              <RightContainer>
                <h6>Entry Fee</h6>
                <p>10 silver</p>
              </RightContainer>
              <LeftContainer>
                <Button variant="dark">Enter Bid</Button>
                <span>
                  <LuAlarmClock size="20" style={{ marginBottom: "5px" }} />
                  3h:25m
                </span>
              </LeftContainer>
            </DContainer>
          </BottomImageDescription>
        </CenterColumn>
        <Chat product={product} />
      </ContentContainer>
    </Container>
  );
};

export default ProductDetail;
