import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 10px 0 0;
  transform: translate(-50%, 80%);
  cursor: pointer;

  & > svg {
    font-size: 16px;
  }
`;
