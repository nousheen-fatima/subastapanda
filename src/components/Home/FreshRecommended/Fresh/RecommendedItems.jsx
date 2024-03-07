import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import ProductCard from "../../../Product/ProductCard";

const RecommendedItems = ({ title, image_url, price, product_Id }) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const bidEndTime = new Date("2024-01-03T09:44:57.000Z");
      const now = new Date();
      const difference = bidEndTime.getTime() - now.getTime();
      if (difference > 0) {
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        setTimeLeft(`${hours}h:${minutes}m`);
      } else {
        setTimeLeft("Bid Closed");
      }
    };

    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <ProductCard
      price={price}
      title={title}
      image_url={image_url}
      product_Id={product_Id}
      timeLeft={timeLeft}
    />
  );
};

export default RecommendedItems;
