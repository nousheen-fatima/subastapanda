import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getAllProducts } from "../../../features/products/productsSlice";
import SpecialAuctionBar from "../../Ui/SpecialAuctionBar";
import VideoContainerSection from "../VideoContainer/VideoContainerSection";
import SpecialAuctionCarousel from "./SpecialAuctionCarousel";

const Wrapper = styled.div`
  width: 100%;
  min-height: 70vh;
`;

const SpecialContainer = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <Wrapper>
      <SpecialAuctionBar />
      <SpecialAuctionCarousel products={products} />
      <VideoContainerSection />
    </Wrapper>
  );
};

export default SpecialContainer;
