import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import PopularCards from "./PopularCards";

const StyledCarousel = styled(Carousel)`
  .react-multi-carousel-item {
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const PopularListSlider = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: responseData } = await axios.get(
          "https://subastaspanda.mx/categories?orderByRelation=products&orderByDirection=desc&page_size=6"
        );
        setData(responseData.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
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
      {Array.isArray(data) &&
        data.map((category) => (
          <PopularCards
            key={category.id}
            title={category.title}
            image_url={category.image}
            product_count={category.products_count}
          />
        ))}
    </StyledCarousel>
  );
};

export default PopularListSlider;
