import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loadMoreProducts } from "../../features/products/productsSlice";
import LoadMoreButton from "../Ui/LoadMoreButton";
import SortFilterButtons from "../Ui/SortFilterButtons";
import ProductsList from "./ProductsList";

const Main = styled(Container)`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  font-size: 30px;
  font-weight: bold;
`;

const Heading = styled.h2`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
`;

const StyledContainer = styled(Container)`
  margin-top: 30px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 80px;
`;

const Index = () => {
  const [sortOption, setSortOption] = useState("latest");
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  return (
    <Main>
      <Heading>Product Listing</Heading>
      {products.length > 0 && (
        <SortFilterButtons
          sortOption={sortOption}
          handleSortChange={handleSortChange}
        />
      )}
      <StyledContainer>
        <ProductsList sortOption={sortOption} />
        {products.length > 0 && (
          <StyledButtonContainer>
            <LoadMoreButton onClick={() => dispatch(loadMoreProducts())}>
              See More Products
            </LoadMoreButton>
          </StyledButtonContainer>
        )}
      </StyledContainer>
    </Main>
  );
};

export default Index;
