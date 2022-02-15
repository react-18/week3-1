import styled, { css } from 'styled-components';

export const Container = styled.li<{ isList?: boolean }>`
  list-style: none;
  width: 375px;
  padding: 13px 0 13px 17px;
  border-bottom: 1px solid ${({ theme }) => theme.color.textGray};
  background-color: white;

  ${({ isList }) =>
    isList &&
    css`
      height: 124px;
      padding: 17px 0 17px 17px;
    `}
`;

export const ItemWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const ItemImage = styled.img<{ isList?: boolean }>`
  ${({ isList }) => css`
    width: ${isList ? 90 : 70}px;
    height: ${isList ? 90 : 70}px;
  `};
  cursor: pointer;
`;

export const TextContainer = styled.div`
  margin-left: 14px;
`;

export const ItemNameText = styled.span<{ isList?: boolean }>`
  display: block;
  margin-bottom: 13px;
  margin-top: ${({ isList }) => isList && '7px'};
`;

export const DiscountText = styled.span`
  color: ${({ theme }) => theme.color.pointRed};
  margin-right: 9px;
`;

export const SellingPriceText = styled.span`
  margin-right: 6px;
`;

export const GrayText = styled.span<{ isList?: boolean }>`
  color: ${({ theme }) => theme.color.textGray};
  font-size: 14px;
  ${({ isList }) =>
    !isList &&
    css`
      text-decoration: line-through;
    `}
`;
