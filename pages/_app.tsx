import { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from '../components/Header';
import GlobalStyle from '../styles/globalStyle';
import { theme } from '../styles/theme';
import * as S from './styled';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [pageTitle, setPageTitle] = useState('니콘내콘');
  function handlePageTitle(title: string) {
    setPageTitle(title);
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>React 18</Head>
      <S.Wrap>
        <S.Header>
          <Header pageTitle={pageTitle} />
        </S.Header>
        <S.Page>
          <Component {...pageProps} handlePageTitle={handlePageTitle} />
        </S.Page>
      </S.Wrap>
    </ThemeProvider>
  );
};

export default MyApp;
