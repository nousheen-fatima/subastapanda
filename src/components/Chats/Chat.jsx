import { faCamera, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Image } from "react-bootstrap";
import styled from "styled-components";
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 40%;
`;
const StyledImageIcon = styled(Image)`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  object-fit: cover;
`;

const ChatColumn = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 25px;
`;
const ChatProfile = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 80px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  background-color: #ebebeb;
`;

const MessageInput = styled.input`
  flex: 1;
  border: none;
  font-size: 20px;
  outline: none;
  background-color: #ebebeb;
`;

const IconButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  margin-left: 8px;
`;
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
`;

const Chat = () => {
  return (
    <Main>
      <Button variant="secondary">Live Chat</Button>
      <ChatColumn>
        <StyledImageIcon
          src="https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg"
          alt="Chimpanzee"
        />
        <ChatProfile>
          <h6>User Name</h6>
          <p>Hello</p>
        </ChatProfile>
        <p style={{ marginTop: "10px", color: "#333" }}>8 min ago</p>
      </ChatColumn>
      <hr />
      <InputContainer>
        <MessageInput type="text" placeholder="Message" />
        <IconButton>
          <StyledFontAwesomeIcon icon={faCamera} />
        </IconButton>
        <IconButton>
          <StyledFontAwesomeIcon icon={faPaperPlane} />
        </IconButton>
      </InputContainer>
    </Main>
  );
};

export default Chat;
