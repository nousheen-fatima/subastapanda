import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import RecommendedItems from "./RecommendedItems";

const StyledCarousel = styled(Carousel)`
  .react-multi-carousel-item {
    outline: none;
  }
`;

const RecommendedCarousel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: responseData } = await axios.get(
          "https://subastaspanda.mx/products?pageSize=4&orderByColumn=created_at&orderByDirection=desc"
        );
        setData(responseData.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
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
        {data.map((category) => (
          <RecommendedItems
            key={category.id}
            title={category.title}
            image_url={category.main_image_url}
            price={category.start_price}
          />
        ))}
      </StyledCarousel>
    </Container>
  );
};

export default RecommendedCarousel;
