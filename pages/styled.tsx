import styled from 'styled-components';

export const Wrap = styled.div`
  width: 375px;
  height: 812px;
  font-size: 14px;
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.lightGray};
  overflow-y: scroll;
  position: relative;
`;

export const Header = styled.div`
  width: 375px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  height: 40px;
  color: ${({ theme }) => theme.color.lightGray};
  background-color: ${({ theme }) => theme.color.white};
`;

export const Page = styled.main`
  margin-top: 40px;
`;
