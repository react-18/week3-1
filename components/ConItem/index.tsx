import React from 'react';
import { ConItemProps } from './types';
import * as S from './styled';

function ConItem({ conItem, brandName, isList }: ConItemProps) {
  const { name, originalPrice, minSellingPrice, imageUrl } = conItem;
  const disCountRate = Math.round(
    ((originalPrice - minSellingPrice) / originalPrice) * 100,
  );

  return (
    <S.Container isList={isList}>
      <S.ItemWrapper>
        <S.ItemImage isList={isList} src={imageUrl} alt={name} />
        <S.TextContainer>
          {isList && <S.GrayText isList={isList}>{brandName}</S.GrayText>}
          <S.ItemNameText isList={isList}>{name}</S.ItemNameText>
          <S.DiscountText>{disCountRate}%</S.DiscountText>
          <S.SellingPriceText>
            {minSellingPrice.toLocaleString()}원
          </S.SellingPriceText>
          <S.GrayText>{originalPrice.toLocaleString()}원</S.GrayText>
        </S.TextContainer>
      </S.ItemWrapper>
    </S.Container>
  );
}

export default ConItem;
