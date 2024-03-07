import React from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
const InputForm = styled(Form)`
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

const DollarInput = styled(Form.Control)`
  text-align: center;
  width: 40px;
  height: 46px;
  color: white;
  background-color: black;
  font-size: 20px;
  border-radius: 10px 0 0 10px;
  border-color: #333;
`;

const TextInput = styled(Form.Control)`
  width: 70px;
  height: 46px;
  border-radius: 0 10px 10px 0;
  border-color: #343a40;
  margin-left: -1px;
`;
const BidInput = ({ value, onChange }) => {
  return (
    <InputForm>
      <DollarInput plaintext readOnly value="$" />
      <TextInput
        type="text"
        placeholder="200"
        value={value}
        onChange={onChange}
      />
    </InputForm>
  );
};

export default BidInput;
