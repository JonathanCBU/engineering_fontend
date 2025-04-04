import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {
    margins: {
      left: number;
      right: number;
      top: number;
      bottom: number;
    };
  }
  interface CustomThemeOptions extends ThemeOptions {
    margins?: {
      left?: number;
      right?: number;
      top?: number;
      bottom?: number;
    };
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}
