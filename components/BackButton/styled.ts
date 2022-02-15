import { contactsStyle } from '../../styles/contacts.styled';
import styled from 'styled-components';

export const Button = styled.button`
  position: absolute;
  left: ${contactsStyle.margin.M};
  width: 12px;
  height: 12px;
  border: none;
  border-top: 1.4px solid #333333;
  border-left: 1.4px solid #333333;
  transform: rotate(-45deg);
  background-color: transparent;
  cursor: pointer;
`;
