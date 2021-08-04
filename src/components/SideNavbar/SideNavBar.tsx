import { Drawer, List } from "@material-ui/core";
import Image from "next/image";
import { FC } from "react";
import AnalyticsIcon from "../../icons/AnalyticsIcon";
import CloudIcon from "../../icons/CloudIcon";
import DashboardIcon from "../../icons/Dashboard";
import InboxIcon from "../../icons/InboxIcon";
import ListingIcon from "../../icons/Listing";
import ProfileIcon from "../../icons/ProfileIcon";
import RecordIcon from "../../icons/Record";
import TableIcon from "../../icons/Table";
import UtilsIcon from "../../icons/UtilsIcon";
import NavItem from "./NavItem";
import { StyledListItem } from "./styled";

const SideNavBar: FC = () => {
  const drawerWidth = 120;

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#663399",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        <StyledListItem style={{ paddingTop: 15, paddingBottom: 50 }}>
          <Image src="/Gull.png" width={52} height={23} alt="Gull" />
        </StyledListItem>
        <NavItem name="Dashboard" Icon={DashboardIcon} route="/" />
        <NavItem name="Listing" Icon={ListingIcon} route="/listing" />
        <NavItem name="Table" Icon={TableIcon} route="/table" />
        <NavItem name="Record" Icon={RecordIcon} route="/record" />
        <NavItem name="Inbox" Icon={InboxIcon} route="/inbox" />
        <NavItem name="Analytics" Icon={AnalyticsIcon} route="/analytics" />
        <NavItem name="Profile" Icon={ProfileIcon} route="/profile" />
        <NavItem name="Cloud" Icon={CloudIcon} route="/cloud" />
        <NavItem name="Utils" Icon={UtilsIcon} route="/utils" />
      </List>
    </Drawer>
  );
};

export default SideNavBar;
