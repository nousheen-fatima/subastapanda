import React from "react";
import { Container, Image } from "react-bootstrap";
import ReactPlayer from "react-player";
import styled from "styled-components";
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 80px;
`;
const VideoContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 70vh;
`;
const Heading = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  font-size: 30px;
  font-weight: bold;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
  justify-content: space-between;
`;
const Paragraph = styled.p`
  font-size: 32px;
  padding: 10px;
`;
const index = () => {
  return (
    <Main>
      <Heading>Our Company</Heading>
      <VideoContainer>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          controls={true}
          width="100%"
          height="700px"
        />
      </VideoContainer>
      <Container>
        <Heading>Our Story</Heading>
        <Content>
          <Paragraph>
            Every single company has a story, so tell yours! Start with the
            reason behind starting your business, the idea or problem that
            prompted your first steps, be open about challenges you've faced
            along the way, and pick out some of your favorite moments to share
            as well.
          </Paragraph>
          <Image
            src="https://subastaspanda.com/static/media/about_company.cb13e8fea69ea462c5dd.png"
            width="500px"
            height="450px"
          />
        </Content>
        <Heading>Our Vision</Heading>
        <Content>
          <Image
            src="https://syscominfo.com/wp-content/uploads/2023/04/vision.jpg"
            width="500px"
            height="450px"
          />
          <Paragraph>
            A vision statement is aspirational and expresses your brand's plan
            or "vision" for the future and potential impact on the world. They
            often serve as a guide for a brand's future goals and explain why
            customers and employees should stick around for the long haul.
          </Paragraph>
        </Content>
        <Heading>Our Mission</Heading>
        <Content>
          <Paragraph>
            A mission statement clarifies what the company wants to achieve, who
            they want to support, and why they want to support them. On the
            other hand, a vision statement describes where the company wants a
            community, or the world, to be as a result of the company's
            services. Thus, a mission statement is a roadmap for the company's
            vision statement.
          </Paragraph>
          <Image
            src="https://subastaspanda.com/static/media/mission.fb8e6383f899da4248d2.png"
            width="500px"
            height="450px"
          />
        </Content>
      </Container>
    </Main>
  );
};

export default index;
