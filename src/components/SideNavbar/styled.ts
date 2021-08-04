import { alpha, ListItem } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const StyledListItem = styled(ListItem)(() => ({
  justifyContent: "center",
  padding: "0 10px",
}));

export const InnerListItem = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  padding: 10,
  marginBottom: 10,
  cursor: "pointer",
  "&:hover": {
    borderRadius: 5,
    backgroundColor: alpha(theme.palette.primary.light, 0.1),
    "& p": {
      visibility: "visible",
    },
  },
  "&.active": {
    borderRadius: 5,
    backgroundColor: alpha(theme.palette.primary.light, 0.1),
    "& p": {
      visibility: "visible",
    },
  },
  "& p": {
    visibility: "hidden",
  },
}));
