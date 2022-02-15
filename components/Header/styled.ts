import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 375px;
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.white};
  transform: translate(-50%, 0);
`;

export const Header = styled.header`
  height: 40px;
`;

export const LeftBtnWrapper = styled.span`
  margin-left: 30px;
  background-color: aqua;
`;

export const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.font.large};
  font-weight: ${({ theme }) => theme.font.normal};
`;
