import React from "react";
import AuctionContainer from "../components/Home/Auctions/AuctionContainer";
import FreshContainer from "../components/Home/FreshRecommended/Fresh/FreshContainer";
import Main from "../components/Home/Popular/Main";
import SearchBar from "../components/Home/Search/SearchBar";
import SpecialContainer from "../components/Home/Special/SpecialContainer";
import UpcomingContainer from "../components/Home/Upcoming/UpcomingContainer";
const Home = () => {
  return (
    <div>
      <SearchBar />
      <Main />
      <AuctionContainer />
      <FreshContainer />
      <UpcomingContainer />
      <SpecialContainer />
    </div>
  );
};

export default Home;
