import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globalStyle';
import { theme } from '../styles/theme';
import * as S from './styled';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <title>React 18</title>
      </Head>
      <S.Wrap>
        <S.Header>header!!</S.Header>
        <S.Page>
          <Component {...pageProps} />
        </S.Page>
      </S.Wrap>
    </ThemeProvider>
  );
};

export default MyApp;
