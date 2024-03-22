import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Dropdown, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import { fetchCategories } from "../../features/categories/categoriesSlice";
import { setFilters } from "../../features/products/productsSlice";
import { fetchUsers } from "../../features/users/userSlice";
import PriceRangeInput from "./PriceRangeInput";

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0)
  }
`;
const StyledButton = styled(Button)`
  border-radius: 10px;
  padding: 10px 20px;
`;
const StyledDropdownMenu = styled(Dropdown.Menu)`
  animation: ${slideInRight} 0.6s ease forwards;
  margin-top: 60px;
  width: 350px;
  height: 600px;
  padding-top: 80px;
`;
const StyledDropdownItem = styled(Dropdown.Item)`
  margin-bottom: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 120px;
  gap: 20px;
`;
const FilterButton = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const users = useSelector((state) => state.users.users);
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [seller, setSeller] = useState("All Sellers");
  const [endDate, setEndDate] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleFilter = () => {
    dispatch(setFilters({ keyword, category, seller, endDate, priceRange }));
  };

  const handleReset = () => {
    setKeyword("");
    setCategory("All Categories");
    setSeller("All Sellers");
    setEndDate("");
    setPriceRange({ min: 0, max: 500 });
  };
  return (
    <Dropdown autoClose="outside">
      <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
        <FontAwesomeIcon icon={faFilter} /> Filters
      </Dropdown.Toggle>
      <StyledDropdownMenu variant="outline-dark">
        <StyledDropdownItem>
          <Form.Control
            type="text"
            placeholder="Keyboard"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </StyledDropdownItem>
        <StyledDropdownItem>
          <Form.Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>All Categories</option>
            {categories.map((category) => (
              <option key={category.id}>{category.title}</option>
            ))}
          </Form.Select>
        </StyledDropdownItem>
        <StyledDropdownItem>
          <Form.Select
            value={seller}
            onChange={(e) => setSeller(e.target.value)}
          >
            <option>All Sellers</option>
            {users.map((user) => (
              <option key={user.id}>{user.full_name}</option>
            ))}
          </Form.Select>
        </StyledDropdownItem>
        <StyledDropdownItem>
          <Form.Control
            type="date"
            placeholder="Ending Date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </StyledDropdownItem>
        <StyledDropdownItem>
          <PriceRangeInput
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          />
        </StyledDropdownItem>
        <ButtonContainer>
          <StyledButton variant="outline-dark" onClick={handleReset}>
            Reset Filter
          </StyledButton>
          <StyledButton variant="dark" onClick={handleFilter}>
            Apply Filter
          </StyledButton>
        </ButtonContainer>
      </StyledDropdownMenu>
    </Dropdown>
  );
};

export default FilterButton;
