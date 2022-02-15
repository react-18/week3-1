import styled from 'styled-components';

export const Container = styled.li<{ type: string }>`
  width: 112px;
  height: 94px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;

  img {
    width: ${({ type }) => (type === 'brand' ? '36px' : '46px')};
    height: ${({ type }) => (type === 'brand' ? '36px' : '46px')};
  }

  span {
    font-size: 12px;
    font-weight: 500;
    margin-top: 14px;
    text-align: center;
  }
`;
