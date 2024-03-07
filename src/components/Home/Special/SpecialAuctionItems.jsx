import React from "react";
import { Container } from "react-bootstrap";
import ProductCard from "../../Product/ProductCard";

const SpecialAuctionItems = ({ title, image_url, price, product_Id }) => {
  return (
    <Container>
      <ProductCard
        price={price}
        title={title}
        image_url={image_url}
        product_Id={product_Id}
      />
    </Container>
  );
};

export default SpecialAuctionItems;
