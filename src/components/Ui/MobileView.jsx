import { faApple } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import styled from "styled-components";

const MainWrapper = styled.div`
  width: 100%;
  min-height: 50vh;
  background-color: #ebebeb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TextWrapper = styled.div`
  color: #000;
  max-width: 600px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Heading = styled.h1`
  font-size: 2.8rem;
  letter-spacing: 6px;
  font-weight: 900;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  letter-spacing: 2px;
  margin-top: 20px;
`;
const Para = styled.p`
  font-size: 1.9rem;
  letter-spacing: 2px;
  margin-top: 20px;
`;

const RoundedImage = styled(Image)`
  border-radius: 50%;
  width: 400px;
  height: 400px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    max-width: 200px;
    height: 200px;
  }
`;

const StyledButton = styled(Button)`
  background-color: #000;
  color: #fff;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;

  @media (max-width: 768px) {
    width: 100%;
  }

  .icon {
    margin-right: 8px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: 80px;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
`;
const ButtonText = styled.span`
  font-size: 10px;
`;

const MobileView = () => {
  return (
    <MainWrapper>
      <Container>
        <ContentWrapper>
          <TextWrapper>
            <Heading>
              <span>Making Buying AND</span>
              <br />
              <span>Selling HASSLE FREE</span>
            </Heading>
            <Para>
              <span>Buy, Sell And Find Just About Anything</span>
              <br />
              <span> Using The App On Your Mobile</span>
            </Para>
            <Wrapper>
              <Paragraph>GET YOUR APP TODAY</Paragraph>
              <StyledButton variant="outline-dark" className="btn-icon-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#4db6ac"
                    d="M7.705,4.043C7.292,4.15,7,4.507,7,5.121c0,1.802,0,18.795,0,18.795S7,42.28,7,43.091c0,0.446,0.197,0.745,0.5,0.856l20.181-20.064L7.705,4.043z"
                  ></path>
                  <path
                    fill="#dce775"
                    d="M33.237,18.36l-8.307-4.796c0,0-15.245-8.803-16.141-9.32C8.401,4.02,8.019,3.961,7.705,4.043l19.977,19.84L33.237,18.36z"
                  ></path>
                  <path
                    fill="#d32f2f"
                    d="M8.417,43.802c0.532-0.308,15.284-8.825,24.865-14.357l-5.601-5.562L7.5,43.947C7.748,44.038,8.066,44.004,8.417,43.802z"
                  ></path>
                  <path
                    fill="#fbc02d"
                    d="M41.398,23.071c-0.796-0.429-8.1-4.676-8.1-4.676l-0.061-0.035l-5.556,5.523l5.601,5.562c4.432-2.559,7.761-4.48,8.059-4.653C42.285,24.248,42.194,23.5,41.398,23.071z"
                  ></path>
                </svg>
                <ButtonText className="d-inline-block text-left">
                  <small className="font-weight-light d-block">
                    Get it on the
                  </small>
                  Google Play
                </ButtonText>
              </StyledButton>
              <StyledButton variant="outline-dark" className="btn-icon-text">
                <StyledFontAwesomeIcon icon={faApple} />
                <ButtonText className="d-inline-block text-left">
                  <small className="font-weight-light d-block">
                    Available on the
                  </small>
                  App Store
                </ButtonText>
              </StyledButton>
            </Wrapper>
          </TextWrapper>
          <RoundedImage
            src="https://img.freepik.com/free-photo/smartphone-device-with-minimalist-monochrome-background_23-2150763340.jpg"
            alt="Mobile view"
          />
        </ContentWrapper>
      </Container>
    </MainWrapper>
  );
};

export default MobileView;
