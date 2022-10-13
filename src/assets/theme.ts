import {ColorProps, TypographyProps, ThemeProps, ScreenProps} from 'types/theme';

export const typography: TypographyProps = {
  bodySmall: {
    size: '14.22px',
    weight: 500,
    lineHeight: '20px'
  },
  body: {
    size: '16px',
    weight: 500,
    lineHeight: '24px'
  },
  strongBody: {
    size: '16px',
    weight: 700,
    lineHeight: '24px'
  },
  subTitle: {
    size: '18px',
    weight: 500,
    lineHeight: '24px'
  },
  caption: {
    size: '12.64px',
    weight: 500,
    lineHeight: '20px'
  },
  footnote: {
    size: '11.24px',
    weight: 500,
    lineHeight: '16px'
  }
};

export const color: ColorProps = {
  neutral: {
    pureWhite: '#FFFFFF',
    pureBlack: '#000000',
    base: '#1F2933',
    200: '#CBD2D9',
    400: '#7B8794'
  },
  brand: {
    brandColorRed: '#CC0000'
  },
  transWhite: {
    xSmall: '#FFFFFF1A'
  }
};

export const screen: ScreenProps = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1200px'
};

export const darkTheme: ThemeProps = {
  color,
  screen,
  typography
};
