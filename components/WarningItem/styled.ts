import styled, { css } from 'styled-components';

export const ItemContainer = styled.div`
  margin-top: 18.33px;
`;
export const Title = styled.div`
  font-size: 14px;
`;

export const Content = styled.span<{ isFirst?: boolean }>`
  display: block;
  font-size: 12px;
  color: #808080;
  line-height: 17px;
  margin-top: ${({ isFirst }) => (isFirst ? '9.7px' : '4.3px')};
  ${({ theme }) => css`
    color: ${theme.color.textGray};
    font-size: ${theme.font.small};
  `}
`;
