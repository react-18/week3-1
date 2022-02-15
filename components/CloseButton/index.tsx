import React from 'react';
import * as S from './styled';
import { IoMdClose } from 'react-icons/io';
import Link from 'next/link';

function CloseButton() {
  return (
    <Link href="/">
      <S.Wrapper>
        <IoMdClose />
      </S.Wrapper>
    </Link>
  );
}

export default CloseButton;
