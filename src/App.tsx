import * as React from 'react';
import { Coffeemug } from './components/ecosystem-coffeemug';
import { createTheme, TextField } from '@fluentui/react';
import { ThemeProvider } from "@fluentui/react-theme-provider"

export const App = () => {
  const [primary, setPrimary] = React.useState("#0078d4")
  const theme = createTheme({
    palette: {
      themePrimary: primary,
    }
  });
  
  return (
    <span>
      <div>
        <TextField value={primary} onChange={(_, v) => setPrimary(v || "")} label="Primary color" />
      </div>
   <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <Coffeemug />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        </div>
        </ThemeProvider>
      </span>
  );
}
