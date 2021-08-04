import { alpha, Grid } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const GridWrapper = styled(Grid)(() => ({
  alignItems: "center",
}));

export const IconWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 10px",
  height: 70,
  width: 20,
  borderRadius: 18,
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
}));

export const ContentWrapper = styled("div")(() => ({
  paddingLeft: 10,
}));
