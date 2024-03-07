import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchCategories } from "../../features/categories/categoriesSlice";
import InputSearch from "../Ui/InputSearch";
import LoadMoreButton from "../Ui/LoadMoreButton";
import CategoryList from "./CategoryList";

const StyledRow = styled(Row)`
  margin-top: 60px;
`;

const Heading = styled.h2`
  font-weight: 700;
`;

const InputContainer = styled.div`
  margin: 60px 0px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 80px;
`;

const GetCategories = () => {
  const dispatch = useDispatch();
  const { categories, status } = useSelector((state) => state.categories);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
    }
  }, [status, dispatch]);

  return (
    <Container>
      <StyledRow>
        <Col>
          <Heading className="text-center">All Categories</Heading>
        </Col>
      </StyledRow>
      <InputContainer>
        <InputSearch />
      </InputContainer>
      <CategoryList categories={categories} />
      <StyledButtonContainer>
        <LoadMoreButton>See More Categories</LoadMoreButton>
      </StyledButtonContainer>
    </Container>
  );
};

export default GetCategories;
