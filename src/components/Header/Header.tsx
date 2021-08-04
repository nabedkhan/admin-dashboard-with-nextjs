import { AppBar, Badge, Box, IconButton, Toolbar } from "@material-ui/core";
import {
  Menu as MenuIcon,
  NotificationsNoneOutlined as NotificationsNoneOutlinedIcon,
  Search as SearchIcon,
} from "@material-ui/icons";
import Image from "next/image";
import ArrowIcon from "../../icons/Arrow";
import { Search, SearchIconWrapper, StyledInputBase } from "./styled";

const Header: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Search sx={{ display: { xs: "none", md: "flex" } }}>
            <SearchIconWrapper>
              <SearchIcon fontSize="small" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />

          <Box>
            <IconButton aria-label="mail icons">
              <ArrowIcon />
            </IconButton>

            <IconButton aria-label="show 3 new notifications">
              <Badge badgeContent={3}>
                <NotificationsNoneOutlinedIcon />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
            >
              <Image src="/user.png" width={50} height={50} alt="user" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
