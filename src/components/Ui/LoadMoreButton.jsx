import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
const StyledButton = styled(Button)`
  width: 400px;
  height: 70px;
  border-radius: 10px;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 1px;
`;
const LoadMoreButton = ({ children }) => {
  return <StyledButton variant="dark">{children}</StyledButton>;
};

export default LoadMoreButton;
