import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globalStyle';
import { theme } from '../styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <title>React 18</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
