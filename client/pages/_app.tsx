import Layout from "components/layout/Layout";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import "antd/dist/antd.css";
import GlobalStyle from "styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { CookiesProvider } from "react-cookie";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core";
import { StyledEngineProvider } from "@mui/material";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_CLIENT_ID}>
          <CookiesProvider>
            <StyledEngineProvider injectFirst>
              <MuiThemeProvider theme={theme}>
                <ThemeProvider theme={theme}>
                  <GlobalStyle />
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                </ThemeProvider>
              </MuiThemeProvider>
            </StyledEngineProvider>
          </CookiesProvider>
        </GoogleOAuthProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
