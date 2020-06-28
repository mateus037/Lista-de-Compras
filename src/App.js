import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Header from "./common/Header";
import './App.css';
import Home from './home';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e91e63',
    },
    secondary: {
      main: '#00b0ff',
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Header/>
      <Home/>
    </MuiThemeProvider>
  );
}

export default App;
