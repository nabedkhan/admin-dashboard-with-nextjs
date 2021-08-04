import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { CSSProperties } from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  bodyStyle: CSSProperties = {
    backgroundColor: "#F1F3F4",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  };
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/Gull.png" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body style={this.bodyStyle}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
