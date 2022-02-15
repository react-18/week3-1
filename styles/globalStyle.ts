import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  @font-face {
  font-family: 'Apple SD Gothic Neo';
  src: url('/fonts/appleSD/AppleSDGothicNeoL.ttf') format('truetype');
  font-weight: 400;
  };

  @font-face {
  font-family: 'Apple SD Gothic Neo';
  src: url('/fonts/appleSD/AppleSDGothicNeoM.ttf') format('truetype');
  font-weight: 500;
  };

  @font-face {
  font-family: 'Apple SD Gothic Neo';
  src: url('/fonts/appleSD/AppleSDGothicNeoB.ttf') format('truetype');
  font-weight: 600;
  };

  /* @font-face {
  font-family: 'Apple SD Gothic Neo';
  src: url('/fonts/appleSD/AppleSDGothicNeoEB.ttf') format('truetype');
  font-weight: 700;
  };

  @font-face {
  font-family: 'Apple SD Gothic Neo';
  src: url('/fonts/appleSD/AppleSDGothicNeoH.ttf') format('truetype');
  font-weight: 900;
  }; */

  body {
    display: flex;
    justify-content: center;
    font-size: ${({ theme }) => theme.font.original};
    color: ${({ theme }) => theme.color.black};
    overflow-y: scroll;
    background-color: ${({ theme }) => theme.color.backgroundGray};
    font-family: "Apple SD Gothic Neo";
  }
  a {
    color:${({ theme }) => theme.color.black}; 
    text-decoration: none;
    outline: none;
  }
  a:hover, a:active {
    text-decoration: none;
  }
  li {
    list-style: none;
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
