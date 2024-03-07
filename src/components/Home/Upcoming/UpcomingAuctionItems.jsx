import React from "react";
import ProductCard from "../../Product/ProductCard";

const UpcomingAuctionItems = ({ title, image_url, price }) => {
  return <ProductCard title={title} image_url={image_url} price={price} />;
};

export default UpcomingAuctionItems;
