export interface ColorProps {
  neutral: {
    pureWhite: string;
    pureBlack: string;
    base: string;
    200: string;
    400: string;
  };
  brand: {
    brandColorRed: string;
  };
}

interface TypographyDetailProps {
  size: string;
  weight: number;
  lineHeight: string;
}

export interface TypographyProps {
  bodySmall: TypographyDetailProps;
  body: TypographyDetailProps;
  strongBody: TypographyDetailProps;
  subTitle: TypographyDetailProps;
  caption: TypographyDetailProps;
  footnote: TypographyDetailProps;
}

export interface SizingProps {
  hug: string;
}

export interface ScreenProps {
  mobile: string;
  tablet: string;
  laptop: string;
  desktop: string;
}

export interface ThemeProps {
  color: ColorProps;
  sizing: SizingProps;
  screen: ScreenProps;
  typography: TypographyProps;
}

export default ThemeProps;
