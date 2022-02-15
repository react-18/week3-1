import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      black: string;
      white: string;
      lightGray: string;
      pointRed: string;
      mediumGray: string;
      darkGray: string;
      navGray: string;
      borderGray: string;
      textGray: string;
      backgroundGray: string;
    };
    font: {
      xLarge: string;
      large: string;
      original: string;
      small: string;
      bold: string;
      normal: string;
      light: string;
    };
  }
}
