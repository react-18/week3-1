import styled from 'styled-components';
import { contactsStyle } from '../../pages/contacts/styled';

export const QuestionWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${contactsStyle.margin.M};
  height: ${contactsStyle.size.blockHeight};
`;

export const TextWrapper = styled.div`
  display: flex;
`;

export const Q = styled.p`
  color: ${({ theme }) => theme.color.pointRed};
`;

export const Question = styled.h3`
  margin-left: ${contactsStyle.margin.S};
  line-height: calc(${({ theme }) => theme.font.original}*1.3);
`;

export const Button = styled.img`
  margin-left: 20px;
  cursor: pointer;
`;

export const Answer = styled.p`
  padding: ${contactsStyle.margin.M};
  line-height: calc(${({ theme }) => theme.font.original}*1.3);
  background-color: ${({ theme }) => theme.color.lightGray};
`;
