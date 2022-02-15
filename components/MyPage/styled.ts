import styled from 'styled-components';

export const Wrapper = styled.div<{ isSideBarOpened: boolean }>`
  position: fixed;
  top: 0;
<<<<<<< HEAD
  width: 375px;
  height: 812px;
=======
  left: 0;
  width: 375px;
  height: 700px;
>>>>>>> 7e82503 (Feat: 고객 센터, 상품목록  페이지 구현)
  transition: all 0.1s ease-in;
  display: ${({ isSideBarOpened }) => (isSideBarOpened ? 'block' : 'none')};
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: ${({ theme }) => theme.color.white};
`;

export const PageTitle = styled.h1`
  font-size: 15px;
  font-weight: 600;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.lightGray};
`;

export const CustomerService = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 10px 0;
  padding: 16px 17px 16px 17px;
  height: 50px;
  background-color: ${({ theme }) => theme.color.white};
`;

export const MoveButton = styled.button`
  width: 12px;
  height: 12px;
  border: none;
  border-bottom: 1.4px solid #333333;
  border-right: 1.4px solid #333333;
  transform: rotate(-45deg);
  background-color: transparent;
`;

export const SpaceArea = styled.div`
  height: 100%;
  background-color: white;
`;
