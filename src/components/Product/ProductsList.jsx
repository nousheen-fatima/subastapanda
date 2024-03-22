import React, { useEffect, useMemo } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  fetchProductsByCategory,
  getAllProducts,
} from "../../features/products/productsSlice";
import ProductCard from "./ProductCard";

const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const NoProductsParagraph = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  text-align: center;
  grid-column: span 3;
`;

const ProductsList = ({ sortOption, next }) => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const url = useLocation();
  const category = url.search.split("=")[1];

  useEffect(() => {
    if (category) {
      dispatch(fetchProductsByCategory(category));
    } else {
      dispatch(getAllProducts());
    }
  }, [dispatch, category]);

  const sortedProducts = useMemo(() => {
    let tempProducts = [...products];
    if (sortOption === "price-lowest") {
      tempProducts.sort((a, b) => a.start_price - b.start_price);
    }
    if (sortOption === "price-highest") {
      tempProducts.sort((a, b) => b.start_price - a.start_price);
    }
    if (sortOption === "latest") {
      tempProducts.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    }
    if (sortOption === "old") {
      tempProducts.sort(
        (a, b) =>
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      );
    }
    return tempProducts;
  }, [sortOption, products]);

  return (
    <StyledContainer>
      {sortedProducts.length === 0 ? (
        <NoProductsParagraph>There are no products to show</NoProductsParagraph>
      ) : (
        sortedProducts
          .slice(0, next)
          ?.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              image_url={product.main_image_url}
              price={product.start_price}
              product_Id={product.id}
            />
          ))
      )}
    </StyledContainer>
  );
};

export default ProductsList;
