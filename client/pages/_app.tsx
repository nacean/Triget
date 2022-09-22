import Layout from "components/layout/Layout";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import "antd/dist/antd.css";
import GlobalStyle from "styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { CookiesProvider } from "react-cookie";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <CookiesProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </CookiesProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
