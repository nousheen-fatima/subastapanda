import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { postContact } from "../../features/contacts/contactsSlice";

const Main = styled(Container)`
  text-align: center;
  margin-top: 80px;
`;

const FormContainer = styled(Container)`
  margin-top: 80px;
`;

const SubmitForm = styled(Container)`
  margin-top: 60px;
  margin-bottom: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 10px;
`;
const SubmitButton = styled(Button)`
  padding: 10px;
  width: 120px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 10px;
`;

const SocialLinks = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;
const Icon = styled.i`
  font-size: 20px;
`;
const SocialIcon = styled.a``;

const ContactForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(postContact(formData));
      toast.success("Thank you for getting in touch!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Error submitting contact form");
    }
  };
  return (
    <Main>
      <h2>Contact Form</h2>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <TextArea
                rows="4"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              ></TextArea>
            </Col>
          </Row>
          <SubmitButton type="submit" variant="dark">
            Submit
          </SubmitButton>
        </form>
      </FormContainer>
      <SubmitForm>
        <SocialLinks>
          <SocialIcon href="https://www.facebook.com">
            <Icon className="fab fa-facebook" style={{ color: "#000" }} />
          </SocialIcon>
          <SocialIcon href="https://www.twitter.com">
            <Icon className="fab fa-twitter" style={{ color: "#000" }} />
          </SocialIcon>
          <SocialIcon href="https://www.pinterest.com">
            <Icon className="fab fa-pinterest" style={{ color: "#000" }} />
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com">
            <Icon className="fab fa-instagram" style={{ color: "#000" }} />
          </SocialIcon>
        </SocialLinks>
      </SubmitForm>
    </Main>
  );
};

export default ContactForm;
