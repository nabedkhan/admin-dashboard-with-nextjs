import { Grid } from "@material-ui/core";
import Head from "next/head";
import { FC, Fragment } from "react";
import DashCard from "../src/components/Dashboard/DashCard";
import ExpenseIcon from "../src/icons/dashboardIcons/ExpenseIcon";
import NewLedIcon from "../src/icons/dashboardIcons/NewLedIcon";
import OrderIcon from "../src/icons/dashboardIcons/OrderIcon";
import SalesIcon from "../src/icons/dashboardIcons/SalesIcon";

const Home: FC = (): JSX.Element => {
  return (
    <Fragment>
      <Head>
        <title>Gull - Dashboard</title>
      </Head>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={3}>
          <DashCard
            color="#663399"
            name="New Leds"
            Icon={NewLedIcon}
            amount={205}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <DashCard
            color="#3981F7"
            name="Sales"
            Icon={SalesIcon}
            amount={4021}
            dollarSign="$"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <DashCard
            color="#5DAE49"
            name="Orders"
            Icon={OrderIcon}
            amount={80}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <DashCard
            color="#FFC620"
            name="Expense"
            Icon={ExpenseIcon}
            amount={1200}
            dollarSign="$"
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Home;
