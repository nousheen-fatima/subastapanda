import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import AppNavbar from "./Navbar";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;
const DIVM = styled.div`
  min-height: 60vh;
`;
const DIVF = styled.div`
  margin-top: auto;
`;

const Layout = () => {
  return (
    <Container>
      <AppNavbar />
      <DIVM>
        <Outlet />
      </DIVM>
      <DIVF>
        <Footer />
      </DIVF>
    </Container>
  );
};

export default Layout;
