import { ThemeProvider } from "@material-ui/core/styles";
import type { AppProps } from "next/app";
import Layout from "../src/components/Layout/Layout";
import theme from "../src/components/Theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
