import React from 'react';
import { OptionItemProps } from './types';
import * as S from './styled';

function OptionItem({ option, onSelect }: OptionItemProps) {
  const { expireAt, sellingPrice, count } = option;
  const getTime = (expireAt) => {
    const stringToDate = new Date(Date.parse(expireAt));
    const year = stringToDate.getFullYear();
    const month = stringToDate.getMonth() + 1;
    const day = stringToDate.getDay();

    return `${year}.${month}.${day} 까지`;
  };

  return (
    <S.Container onClick={onSelect}>
      <S.Wrapper>
        <S.Title>유효기간</S.Title>
        <S.Title>할인가</S.Title>
      </S.Wrapper>
      <S.ContentWrapper>
        <S.Content>{getTime(expireAt)}</S.Content>
        <S.Content>{sellingPrice}원</S.Content>
      </S.ContentWrapper>
      <S.Discount>{count}%</S.Discount>
    </S.Container>
  );
}

export default OptionItem;
