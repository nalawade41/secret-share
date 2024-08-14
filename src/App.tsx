import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import {Routes} from "./routes/routes";
import { ThemeProvider } from '@emotion/react';
import theme from './theme';


const router = createBrowserRouter(Routes);

function App() {

  return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </div>
  );
}

export default App;
