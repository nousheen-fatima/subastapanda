import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { FaMobile, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoMdMail } from "react-icons/io";
import styled from "styled-components";
import contact from "../../assets/contact.png";
import ContactForm from "./ContactForm";
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 60px;
  font-size: 30px;
  font-weight: bold;
`;
const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 40px;
`;
const ContactImage = styled(Image)`
  max-width: 90%;
  height: 600px;
  border-radius: 10px;
`;
const LeftImageContainer = styled(Row)`
  width: 40%;
  padding-left: 150px;
`;
const RightInfoContainer = styled(Col)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const InfoHeadings = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ContactIcon = styled.span`
  margin-right: 10px;
`;
const InfoSubHeadings = styled.span`
  color: #c7c6c5;
`;
const Heading = styled.p`
  font-size: 18px;
`;

const index = () => {
  return (
    <Main>
      <MainContent>Contact Us</MainContent>
      <InfoContainer>
        <LeftImageContainer>
          <Col>
            <ContactImage src={contact} alt="contact" />
          </Col>
        </LeftImageContainer>
        <RightInfoContainer>
          <Row>
            <Col xs={1}>
              <ContactIcon>
                <HiOutlineBuildingOffice2
                  size={40}
                  style={{ color: "#c7c6c5" }}
                />
              </ContactIcon>
            </Col>
            <InfoHeadings xs={11}>
              <Heading>
                192 street, sector2, block 5,san francisco CA,USA.
              </Heading>
            </InfoHeadings>
          </Row>
          <hr />
          <Row>
            <Col xs={1}>
              <ContactIcon>
                <FaMobile size={40} style={{ color: "#c7c6c5" }} />
              </ContactIcon>
            </Col>
            <InfoHeadings xs={11}>
              <Heading>+123 467 981 111</Heading>
              <InfoSubHeadings>Mobile</InfoSubHeadings>
            </InfoHeadings>
          </Row>
          <hr />
          <Row>
            <Col xs={1}>
              <ContactIcon>
                <IoMdMail size={40} style={{ color: "#c7c6c5" }} />
              </ContactIcon>
            </Col>
            <InfoHeadings xs={11}>
              <Heading>Usmanyousaf@gmail.com</Heading>
              <InfoSubHeadings>Home</InfoSubHeadings>
            </InfoHeadings>
          </Row>
          <hr />
          <Row>
            <Col xs={1}>
              <ContactIcon>
                <HiOutlineBuildingOffice2
                  size={40}
                  style={{ color: "#c7c6c5" }}
                />
              </ContactIcon>
            </Col>
            <InfoHeadings xs={11}>
              <Heading>+123 467 981 111</Heading>
              <InfoSubHeadings>Headquarter</InfoSubHeadings>
            </InfoHeadings>
          </Row>
          <hr />
          <Row>
            <Col xs={1}>
              <ContactIcon>
                <FaPhoneAlt size={30} style={{ color: "#c7c6c5" }} />
              </ContactIcon>
            </Col>
            <InfoHeadings xs={11}>
              <Heading> +123 467 981 111</Heading>
              <InfoSubHeadings>Helpline</InfoSubHeadings>
            </InfoHeadings>
          </Row>
          <hr />
        </RightInfoContainer>
      </InfoContainer>
      <ContactForm />
    </Main>
  );
};

export default index;
