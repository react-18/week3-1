import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 251px;
  overflow: auto;
`;

export const OptionSelect = styled.div`
  height: 49px;
  font-size: ${({ theme }) => theme.font.original};
  font-weight: ${({ theme }) => theme.font.normal};
  background-color: ${({ theme }) => theme.color.lightGray};
  padding: 16px 17px;
`;

export const OptionList = styled.div`
  height: 192px;
  overflow: auto;
`;
