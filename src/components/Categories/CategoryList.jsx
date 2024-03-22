import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Title = styled.h4`
  font-size: 20px;
`;

const Items = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const StyledCategoryImage = styled(Image)`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
`;
const CategoryList = ({ categories }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        {categories.map((category) => (
          <Col
            key={category.id}
            xs={12}
            sm={6}
            md={4}
            onClick={() => navigate("/products?category=" + category.title)}
            style={{
              cursor: "pointer",
            }}
          >
            <Items className="mb-4">
              <Title className="text-center">{category.title}</Title>
              <StyledCategoryImage alt={category.title} src={category.image} />
            </Items>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryList;
