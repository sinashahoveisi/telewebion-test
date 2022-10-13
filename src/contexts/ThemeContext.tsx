import React, {useState, FC} from 'react';
import {ThemeContext, ThemeProvider} from 'styled-components';
import ThemeProps from 'types/theme';
import {darkTheme} from 'assets/theme';

const ThemeContextProvider: FC<any> = ({children}) => {
  const [theme, setTheme] = useState<ThemeProps>(darkTheme);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
