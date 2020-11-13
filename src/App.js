"use strict";
exports.__esModule = true;
var React = require("react");
require("./App.css");
var ecosystem_coffeemug_1 = require("./components/ecosystem-coffeemug");
var react_1 = require("@fluentui/react");
var react_theme_provider_1 = require("@fluentui/react-theme-provider");
function App() {
    var _a = React.useState("#0078d4"), primary = _a[0], setPrimary = _a[1];
    var theme = react_1.createTheme({
        palette: {
            themePrimary: primary
        }
    });
    return (<span>
      <div>
        <react_1.TextField value={primary} onChange={function (_, v) { return setPrimary(v || ""); }} label="Primary color"/>
      </div>
   <react_theme_provider_1.ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <ecosystem_coffeemug_1.Coffeemug />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
        </div>
        </react_theme_provider_1.ThemeProvider>
      </span>);
}
exports["default"] = App;
