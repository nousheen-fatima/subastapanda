import { faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Dropdown } from "react-bootstrap";
import styled, { keyframes } from "styled-components";

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0)
  }
`;

const StyledSortDropdownMenu = styled(Dropdown.Menu)`
  animation: ${slideInRight} 0.6s ease forwards;
  margin-top: 60px;
`;

const SortProduct = ({ sortOption, handleSortChange }) => {
  const sortingOptions = ["latest", "old", "price-lowest", "price-highest"];

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
          <FontAwesomeIcon icon={faSort} /> Sort By
        </Dropdown.Toggle>
        <StyledSortDropdownMenu value={sortOption}>
          {sortingOptions.map((option, index) => (
            <Dropdown.Item
              key={index}
              value={option}
              onClick={() => handleSortChange(option)}
              active={sortOption === option}
            >
              {option}
            </Dropdown.Item>
          ))}
        </StyledSortDropdownMenu>
      </Dropdown>
    </div>
  );
};

export default SortProduct;
