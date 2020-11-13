import * as React from 'react';
import './App.css';
import { Coffeemug } from './components/ecosystem-coffeemug';
import { createTheme, TextField } from '@fluentui/react';
import { ThemeProvider } from "@fluentui/react-theme-provider";
function App() {
    var _a = React.useState("#0078d4"), primary = _a[0], setPrimary = _a[1];
    var theme = createTheme({
        palette: {
            themePrimary: primary,
        }
    });
    return (React.createElement("span", null,
        React.createElement("div", null,
            React.createElement(TextField, { value: primary, onChange: function (_, v) { return setPrimary(v || ""); }, label: "Primary color" })),
        React.createElement(ThemeProvider, { theme: theme },
            React.createElement("div", { className: "App" },
                React.createElement("header", { className: "App-header" },
                    React.createElement(Coffeemug, null),
                    React.createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "Learn React"))))));
}
export default App;
