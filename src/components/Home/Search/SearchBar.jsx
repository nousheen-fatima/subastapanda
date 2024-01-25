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
import styled from "styled-components";

const SearchBarContainer = styled.div`
  background: url("https://images.pexels.com/photos/11802168/pexels-photo-11802168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
    center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
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
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SearchInputGroup = styled(InputGroup)`
  width: 80%;
  margin-inline: auto;
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
`;

const SearchButton = styled(Button)`
  background: white;
  position: absolute;
  right: 50px;
  width: 100px;
  height: 100px;
  display: flex;
  color: #7e7e7e;
  align-items: center;
  justify-content: center;
  border: 8px solid #2a2d30;
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
`;

const SearchResultItem = styled(ListGroup.Item)`
  font-size: 20px;
  background-color: #2a2d30;
  color: white;
  border: none;
`;

const SearchBar = () => {
  const BASE_URL = "https://subastaspanda.mx";
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(-1);

  useEffect(() => {
    const fetchData = async () => {
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
    fetchData();
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

  // const filterData = (searchTerm) => {
  //   const filteredData = data.filter((item) =>
  //     item.title.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setFilteredData(filteredData);
  // };

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

  const handleItemClick = (selectedItem) => {
    setSearchTerm(selectedItem.title);
    setFilteredData([]);
    setData([]);
    setSelectedItem(-1);
  };

  return (
    <SearchBarContainer>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Heading>Find Your Next Piece Of Art</Heading>
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
          <SearchButton variant="info">
            {searchTerm === "" ? (
              <SearchIcon icon={faSearch} />
            ) : (
              <CloseIcon icon={faClose} onClick={handleClose} />
            )}
          </SearchButton>
        </SearchInputGroup>
        {filteredData.length !== 0 && (
          <SearchResultList style={{ width: "60%" }}>
            {filteredData.slice(0, 10).map((result, index) => (
              <SearchResultItem
                key={index}
                onClick={() => handleItemClick(result)}
                className={selectedItem === index ? "active" : ""}
              >
                <SearchIcon icon={faSearch} /> {result.title}
              </SearchResultItem>
            ))}
          </SearchResultList>
        )}
      </Container>
    </SearchBarContainer>
  );
};

export default SearchBar;
