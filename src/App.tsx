import {createGlobalStyle} from 'styled-components';
import ThemeContextProvider from '@/contexts/ThemeContext';
import MyRoutes from './routes';

const App = () => {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <MyRoutes />
    </ThemeContextProvider>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100vh;
    direction: var(--direction);
    font-family: var(--font-family);
    background-color: var(--neutral-pureBlack);
  }

  @mixin tablet($size: 768px) {
    @media screen and (max-width: $size) {
    @content;
    }
  }
`;
