import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductDetail from "../components/Product/ProductDetail";
import { getDetailProduct } from "../features/products/productsSlice";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetail } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);

  return (
    <Container>
      <ProductDetail product={productDetail} />
    </Container>
  );
};

export default SingleProduct;
