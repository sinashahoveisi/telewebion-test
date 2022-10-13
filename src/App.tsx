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
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  h1,h2,h3,h4,h5,h6, figure {
    margin: 0;
  }
  
  figure {
    grid-column-start: 1;
    grid-row-start: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @mixin tablet($size: 768px) {
    @media screen and (max-width: $size) {
    @content;
    }
  }
`;
