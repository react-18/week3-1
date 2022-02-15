import styled from 'styled-components';

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 375px;
  height: 40px;
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.white};
  transform: translate(-50%, 0);
`;

export const PageTitle = styled.h1`
  font-weight: ${({ theme }) => theme.font.bold};
`;
