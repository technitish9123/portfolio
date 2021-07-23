import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import React from 'react';
const theme = createTheme({
    palette: {
      teal: "#64ffda",
    },
  });
ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme} >
     <App />
    </ThemeProvider>
    </React.StrictMode>,
     document.getElementById('root')
     );
