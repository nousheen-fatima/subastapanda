import React from "react";
import styled from "styled-components";
import InputSearch from "../../Ui/InputSearch";

const SearchBarContainer = styled.div`
  background: url("https://images.pexels.com/photos/11802168/pexels-photo-11802168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
    center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;

  height: 80vh;
  color: white;
`;
const Heading = styled.h1`
  font-size: 60px;
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
  padding-bottom: 20px;
  letter-spacing: 11px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <Heading>Find Your Next Piece Of Art</Heading>
      <InputSearch />
    </SearchBarContainer>
  );
};

export default SearchBar;
