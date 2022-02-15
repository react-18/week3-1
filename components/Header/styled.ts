import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 375px;

  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.white};
  transform: translate(-50%, 0);
`;

export const Header = styled.header`
  /* height: 40px; */
`;

export const PageTitle = styled.h1`
  font-weight: ${({ theme }) => theme.font.bold};
`;
