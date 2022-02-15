import styled, { css } from 'styled-components';

export const Button = styled.button<{ isSelected: boolean }>`
  z-index: 100000;
  width: 100%;
  height: 80px;
  font-size: 16px;
  border: none;
  padding: 23px 0 40px 0;
  ${({ theme, isSelected }) => css`
    color: ${theme.color.white};
    background-color: ${isSelected
      ? theme.color.pointRed
      : theme.color.mediumGray};
  `}
`;

export const BackgroundDimm = styled.div`
  position: absolute;
  z-index: 100;
  top: 124px;
  left: 0;
  width: 100%;
  height: calc(100% - 204px);
  background-color: ${({ theme }) => theme.color.darkGray};
`;

export const InnerContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 251px;
  background-color: ${({ theme }) => theme.color.white};
`;
