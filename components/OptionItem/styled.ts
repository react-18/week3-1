import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  padding: 12px 17px;
  align-items: center;
  height: 61px;
  border-bottom: 1px solid ${({ theme }) => theme.color.borderGray};
`;

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  height: 33.5px;
`;

export const Title = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.font.small};
  color: ${({ theme }) => theme.color.textGray};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 9px;
  width: 183px;
  height: 38px;
`;

export const Content = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.font.xLarge};
`;

export const Discount = styled.span`
  display: inline-block;
  margin-left: 63px;
  color: ${({ theme }) => theme.color.pointRed};
  font-size: ${({ theme }) => theme.font.xLarge};
`;
