import React from "react";
import styled from "styled-components";
import FilterButton from "../FilterProduct/FilterButton";
import SortProduct from "./SortProduct";

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`;

const SortFilterButtons = ({ sortOption, handleSortChange }) => {
  return (
    <ButtonContainer>
      <SortProduct
        sortOption={sortOption}
        handleSortChange={handleSortChange}
      />
      <FilterButton />
    </ButtonContainer>
  );
};

export default SortFilterButtons;
