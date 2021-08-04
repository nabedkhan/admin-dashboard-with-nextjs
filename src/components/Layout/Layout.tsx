import { Box, styled } from "@material-ui/core";
import { FC } from "react";
import Header from "../Header/Header";
import SideNavBar from "../SideNavbar/SideNavBar";

const Layout: FC = ({ children }) => {
  const Wrapper = styled("div")(() => ({
    padding: 20,
  }));

  return (
    <Box sx={{ display: "flex" }}>
      <SideNavBar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Header />
        <Wrapper>{children}</Wrapper>
      </Box>
    </Box>
  );
};

export default Layout;
