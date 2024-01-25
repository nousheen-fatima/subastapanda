import React from "react";
import styled from "styled-components";
import MobileView from "../../Ui/MobileView";
import SpecialAuctionBar from "../../Ui/SpecialAuctionBar";
import SpecialAuctionCarousel from "./SpecialAuctionCarousel";

const Wrapper = styled.div`
  width: 100%;
  min-height: 70vh;
`;

const SpecialContainer = () => {
  return (
    <Wrapper>
      <SpecialAuctionBar />
      <SpecialAuctionCarousel />
      <MobileView />
    </Wrapper>
  );
};

export default SpecialContainer;
