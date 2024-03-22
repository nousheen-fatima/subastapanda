import {
  faClose,
  faMicrophone,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  ListGroup,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BASE_URL } from "../../config";

const SearchInputGroup = styled(InputGroup)`
  width: 85%;
  margin-left: 60px;
  position: relative;
`;

const SearchFormControl = styled(FormControl)`
  color: #7e7e7e;
  border-radius: 30px;
  height: 100px;
  font-size: 20px;
  padding-left: 30px;
  z-index: 0 !important;
  letter-spacing: 5px;
  border: 1px solid black;
`;

const SearchButton = styled(Button)`
  background: white;
  position: absolute;
  right: 40px;
  width: 100px;
  height: 100px;
  display: flex;
  color: #7e7e7e;
  align-items: center;
  justify-content: center;
  border: 10px solid black;
  border-radius: 100% !important;
  z-index: 999 !important;
`;

const SearchIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  width: 24px;
  height: 24px;
`;
const CloseIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
  width: 24px;
  height: 24px;
`;

const StyledMicIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
  color: #7e7e7e;
  position: absolute;
  top: 0;
  right: 8%;
  margin-top: 2rem;
  margin-right: 80px;
  padding: 0px 0.5rem;
  cursor: pointer;
`;

const SearchResultList = styled(ListGroup)`
  display: flex;
  justify-content: center;
`;

const SearchResultItem = styled(ListGroup.Item)`
  cursor: pointer;

  font-size: 20px;
  background-color: #2a2d30;
  color: white;
  border: none;
`;

const InputSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(-1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSearchData = async () => {
      try {
        if (searchTerm !== "") {
          const response = await axios.get(
            `${BASE_URL}/products/search?keyword=${searchTerm}`
          );
          setData(response.data.data);
          setFilteredData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchSearchData();
  }, [searchTerm]);

  const handleFilter = (e) => {
    const searchInput = e.target.value;
    setSearchTerm(searchInput);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchInput.toLowerCase());
    });
    if (searchInput === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const handleClose = () => {
    setSearchTerm("");
    setSearchTerm([]);
    setSelectedItem(-1);
    setData([]);
  };

  const handleKeyDown = (e) => {
    if (selectedItem < data.length) {
      if (e.key === "ArrowUp" && selectedItem > 0) {
        setSelectedItem((prev) => prev - 1);
      } else if (e.key === "ArrowDown" && selectedItem < data.length - 1) {
        setSelectedItem((prev) => prev + 1);
      } else if (e.key === "Enter" && selectedItem >= 0) {
        window.open(data[selectedItem]);
      }
    } else {
      setSelectedItem(-1);
    }
  };

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <SearchInputGroup>
        <SearchFormControl
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon2"
          value={searchTerm}
          onChange={handleFilter}
          onKeyDown={handleKeyDown}
        />
        <StyledMicIcon icon={faMicrophone} />
        <SearchButton variant="outline-dark">
          {searchTerm === "" ? (
            <SearchIcon icon={faSearch} />
          ) : (
            <CloseIcon icon={faClose} onClick={handleClose} />
          )}
        </SearchButton>
      </SearchInputGroup>
      {filteredData.length !== 0 && (
        <SearchResultList style={{ width: "80%" }}>
          {filteredData.slice(0, 10).map((result, index) => (
            <SearchResultItem
              key={index}
              onClick={() => {
                const category = result.title;
                navigate("/products?category=" + category);
              }}
              className={selectedItem === index ? "active" : ""}
            >
              <SearchIcon icon={faSearch} /> {result.title}
            </SearchResultItem>
          ))}
        </SearchResultList>
      )}
    </Container>
  );
};

export default InputSearch;
