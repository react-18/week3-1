import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      black: string;
      white: string;
      red: string;
      backgroundGray: string;
      borderGray: string;
      textGray: string;
      buttonGray: string;
    };
    size: {
      blockHeight: string;
    };
    font: {
      sizeL: string;
      sizeM: string;
      sizeS: string;
      weightL: string;
      weightM: string;
      weightS: string;
    };
    margin: {
      m: string;
      L: string;
    };
  }
}
