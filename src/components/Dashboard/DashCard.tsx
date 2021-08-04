import { Card, CardContent, Typography } from "@material-ui/core";
import { FC } from "react";
import { ContentWrapper, GridWrapper, IconWrapper } from "./styled";

interface IProps {
  name: string;
  color: string;
  Icon: () => JSX.Element;
  amount: number;
  dollarSign?: string;
}

const DashCard: FC<IProps> = ({
  name,
  color,
  Icon,
  amount,
  dollarSign,
}): JSX.Element => {
  return (
    <Card>
      <CardContent>
        <GridWrapper container>
          <IconWrapper>
            <Icon />
          </IconWrapper>

          <ContentWrapper>
            <Typography>{name}</Typography>
            <Typography
              fontWeight={900}
              fontSize={30}
              lineHeight={1}
              color={color}
            >
              {dollarSign}
              {amount}
            </Typography>
          </ContentWrapper>
        </GridWrapper>
      </CardContent>
    </Card>
  );
};

export default DashCard;
