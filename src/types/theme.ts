export interface ColorProps {
  neutral: {
    pureWhite: string;
    200: string;
    400: string;
  };
}

interface TypographyDetailProps {
  size: string;
  lineHeight: string;
}

export interface TypographyProps {
  bodySmal: TypographyDetailProps;
}

export interface ThemeProps {
  color: ColorProps;
  typography: TypographyProps;
}

export default ThemeProps;
