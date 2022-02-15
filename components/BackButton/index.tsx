import React from 'react';
import * as S from './styled';
import Router from 'next/router';

function BackButton() {
  return <S.Button onClick={() => Router.back()}></S.Button>;
}

export default BackButton;
