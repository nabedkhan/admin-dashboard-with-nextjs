import { Typography } from "@material-ui/core";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { FC } from "react";
import { InnerListItem, StyledListItem } from "./styled";

interface IProps {
  name: string;
  route: string;
  Icon: () => JSX.Element;
}

const NavItem: FC<IProps> = ({ name, Icon, route }) => {
  const { pathname } = useRouter();

  const activeRoute = (url: string) => (pathname === url ? "active" : "");
  return (
    <Link href={route} passHref>
      <StyledListItem>
        <InnerListItem className={activeRoute(route)}>
          <Icon />
          <Typography color="white" fontSize={12}>
            {name}
          </Typography>
        </InnerListItem>
      </StyledListItem>
    </Link>
  );
};

export default NavItem;
