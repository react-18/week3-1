import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import * as S from './styled';

function Hamburger({ isSideBarOpened, setIsSideBarOpened }) {
  return (
    <S.Button onClick={() => setIsSideBarOpened(!isSideBarOpened)}>
      <AiOutlineMenu />
    </S.Button>
  );
}

export default Hamburger;
