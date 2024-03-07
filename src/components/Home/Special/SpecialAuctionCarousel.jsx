import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import SpecialAuctionItems from "./SpecialAuctionItems";

const StyledCarousel = styled(Carousel)`
  .react-multi-carousel-item {
    outline: none;
  }
`;

const SpecialAuctionCarousel = ({ products }) => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <Container>
      <StyledCarousel
        responsive={responsive}
        additionalTransfrom={0}
        autoPlaySpeed={3000}
        centerMode={false}
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        showDots={false}
        arrows={false}
      >
        {products.map((product) => (
          <SpecialAuctionItems
            key={product.id}
            title={product.title}
            image_url={product.main_image_url}
            price={product.start_price}
            product_Id={product.id}
          />
        ))}
      </StyledCarousel>
    </Container>
  );
};

export default SpecialAuctionCarousel;
