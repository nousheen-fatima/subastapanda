import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import AppNavbar from "./Navbar";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const DIVM = styled(Container)`
  min-height: 60vh;
`;
const DIVF = styled(Container)`
  margin-top: auto;
`;
const DIVH = styled(Container)`
  width: 100%;
`;

const Layout = () => {
  return (
    <Container>
      <DIVH>
        <AppNavbar />
      </DIVH>

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
