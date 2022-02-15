import { useRouter } from 'next/router';
import React, { useState } from 'react';
import BackButton from '../BackButton';
import CloseButton from '../CloseButton';
import Hamburger from '../Hamburger';
import MyPage from '../MyPage';
import * as S from './styled';

function Header({ pageTitle }) {
  const router = useRouter();
  const [isSideBarOpened, setIsSideBarOpened] = useState(false);
  const path = router.pathname;

  function handleLeftButton() {
    if (path.includes('brands')) {
      return <BackButton />;
    } else if (path.includes('contacts')) {
      return;
    } else if (path.includes('item')) {
      return <BackButton />;
    } else if (path === '/') {
      return (
        <Hamburger
          isSideBarOpened={isSideBarOpened}
          setIsSideBarOpened={setIsSideBarOpened}
        />
      );
    } else if (path.includes('categories')) {
      return <BackButton />;
    }
  }

  function handleRightButton() {
    if (path.includes('contacts')) {
      return <CloseButton />;
    }
  }

  function handlePageTitle() {
    if (path.includes('contacts')) {
      return '고객센터';
    } else if (path === '/') {
      return '니콘내콘';
    } else if (path.includes('brands')) {
      return pageTitle;
    } else if (path.includes('categories')) {
      return pageTitle;
    }
  }

  return (
    <S.Wrapper>
      <MyPage
        isSideBarOpened={isSideBarOpened}
        setIsSideBarOpened={setIsSideBarOpened}
      />
      <S.Header>
        <S.LeftBtnWrapper>{handleLeftButton()}</S.LeftBtnWrapper>
        <S.PageTitle>{handlePageTitle()}</S.PageTitle>
        {handleRightButton()}
      </S.Header>
    </S.Wrapper>
  );
}

export default Header;
