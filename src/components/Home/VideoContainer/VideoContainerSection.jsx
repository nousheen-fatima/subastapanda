import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import styled from "styled-components";

const StyledRow = styled(Row)`
  display: flex;
  padding: 40px;
  gap: 30px;
`;
const MainWrapper = styled.div`
  min-height: 60vh;
  background-color: #f5f3f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  margin-top: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 10px;
  }
`;
const LeftItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Heading = styled.h2`
  color: black;
  font-weight: 700;
  font-size: 2rem;
  font-family: "Courier New", Courier, monospace;
`;

const Paragraph = styled.p`
  font-family: "Courier New", Courier, monospace;
  color: #666;
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
`;

const StyledButton = styled(Button)`
  width: 120px;
  align-self: center;
`;

const VideoContainerSection = () => {
  return (
    <MainWrapper>
      <Container>
        <StyledRow>
          <Col>
            <LeftItems>
              <Heading>HighLight By Our Expert </Heading>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                vel turpis ut libero scelerisque vestibulum.Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Nullam vel turpis ut
                libero scelerisque vestibulum.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nullam vel turpis ut libero
                scelerisque vestibulum.
              </Paragraph>
              <StyledButton variant="dark">View Item</StyledButton>
            </LeftItems>
          </Col>
          <Col>
            <VideoWrapper>
              <ReactPlayer
                url="www.youtube.com/watch?v=3tmd-ClpJxA"
                controls={false}
                width="800px"
                height="450px"
              />
            </VideoWrapper>
          </Col>
        </StyledRow>
      </Container>
    </MainWrapper>
  );
};

export default VideoContainerSection;
