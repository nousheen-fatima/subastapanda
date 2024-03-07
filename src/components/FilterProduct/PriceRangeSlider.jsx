import React, { useState } from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RangeContainer = styled.div`
  width: 80%;
  margin-top: 20px;
`;
const RangeInput = styled(Form.Range)`
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  background: #d3d3d3;
  border: none;
  border-radius: 5px;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: black;
    border-radius: 50%;
    cursor: pointer;
  }

  &:hover::-webkit-slider-thumb {
    background: #45a049;
  }
`;

const PriceRangeSlider = ({ min, max }) => {
  const [values, setValues] = useState([min, max]);

  const handleChange = (newValues) => {
    setValues(newValues);
  };

  return (
    <Container>
      <RangeContainer>
        <RangeInput
          value={values}
          onChange={(e) => handleChange(e.target.value.split(","))}
          min={min}
          max={max}
        />
      </RangeContainer>
    </Container>
  );
};

export default PriceRangeSlider;
