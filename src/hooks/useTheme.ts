import {useContext} from 'react';
import {ThemeContext} from 'styled-components';

function useTheme() {
  const {theme, setTheme} = useContext(ThemeContext);

  return {theme, setTheme};
}
export default useTheme;
