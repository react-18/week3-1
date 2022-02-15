import { contactsStyle } from './../contacts/styled';
import styled from 'styled-components';

export const Wrapper = styled.div``;
export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${contactsStyle.size.blockHeight};
  background-color: ${({ theme }) => theme.color.white};
`;
export const Title = styled.h1``;
export const ProductCounter = styled.div`
  display: flex;
  align-items: center;
  padding: ${contactsStyle.margin.M};
  height: ${contactsStyle.size.blockHeight};
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.textGray};
`;
export const ProductCount = styled.p``;
export const ProductList = styled.ul`
  margin-top: ${contactsStyle.margin.S};
  padding: ${contactsStyle.margin.M};
  background-color: ${({ theme }) => theme.color.white};
`;
