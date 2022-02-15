import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap");
  ${reset}
  * {
    box-sizing: border-box;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  body {
    width: 375px;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.backgroundGray};
  }
  input {
    border: none;
    outline: none;
  }
  button {
    border: none;
    background-color: transparent;
  }
`;

export default GlobalStyle;
