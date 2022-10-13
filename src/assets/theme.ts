import {ColorProps, TypographyProps, ThemeProps} from 'types/theme';

export const typography: TypographyProps = {
  bodySmal: {
    size: '14.22px',
    lineHeight: '20px'
  }
};

export const color: ColorProps = {
  neutral: {
    pureWhite: '#FFFFFF',
    200: '#CBD2D9',
    400: '#7B8794'
  }
};

export const darkTheme: ThemeProps = {
  color,
  typography
};
