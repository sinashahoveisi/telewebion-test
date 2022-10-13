import ThemeContextProvider from 'contexts/ThemeContext';
import MyRoutes from './routes';

const App = () => {
  return (
    <ThemeContextProvider>
      <MyRoutes />
    </ThemeContextProvider>
  );
};

export default App;
