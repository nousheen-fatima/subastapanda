import React from "react";
import { Container, Form } from "react-bootstrap";
import styled from "styled-components";

const PriceFilterContainer = styled.div`
  h6 {
    margin-bottom: 0.5rem;
  }

  .price_range_wrapper {
    margin-top: 1rem;

    .price_range_top {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 14px;
      }
    }

    .input-range {
      margin-top: 0.5rem;

      .input-range__slider-container {
        position: relative;

        span {
          font-size: 12px;
        }
      }
    }
  }
`;

const PriceRangeInput = ({ value, onChange }) => {
  return (
    <PriceFilterContainer>
      <Container>
        <h6>Price Range</h6>
        <div className="price_range_wrapper">
          <div className="price_range_top">
            <span>$0</span>
            <span>$500</span>
          </div>
          <div className="input-range">
            <Form.Range value={value} onChange={onChange} />
          </div>
        </div>
      </Container>
    </PriceFilterContainer>
  );
};

export default PriceRangeInput;
