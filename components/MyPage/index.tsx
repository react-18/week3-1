import Link from 'next/link';
import React, { useRef } from 'react';
import * as S from './styled';

function MyPage({ isSideBarOpened, setIsSideBarOpened }) {
  const sideBarRef = useRef(null);

  return (
    <S.Wrapper
      isSideBarOpened={isSideBarOpened}
      ref={sideBarRef}
      onClick={() => setIsSideBarOpened(!isSideBarOpened)}
    >
      <S.Header>
        <S.PageTitle>마이페이지</S.PageTitle>
      </S.Header>
      <S.List>
        <Link href="/contacts">
          <S.CustomerService>
            <p>고객센터</p>
            <S.MoveButton></S.MoveButton>
          </S.CustomerService>
        </Link>
      </S.List>
      <S.SpaceArea />
    </S.Wrapper>
  );
}

export default MyPage;
