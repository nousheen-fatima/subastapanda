import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import AppNavbar from "./Navbar";

import styled from "styled-components";

const Containz = styled.div`
  display: flex;
  flex-direction: column;
  background: red;
`;

const DIVN = styled.div`
  padding-top: 5rem;
`;

const DIVM = styled.div`
  padding: 3rem 0rem;
  min-height: 60vh;
  position: relative;
`;
const DIVF = styled.div`
  margin-top: auto;
`;

const Layout = () => {
  return (
    <Containz>
      <DIVN>
        <AppNavbar />
      </DIVN>
      <DIVM>
        <Outlet />
      </DIVM>
      <DIVF>
        <Footer />
      </DIVF>
    </Containz>
  );
};

export default Layout;
