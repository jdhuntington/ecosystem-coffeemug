"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
require("./App.css");
var ecosystem_coffeemug_1 = require("./components/ecosystem-coffeemug");
var react_1 = require("@fluentui/react");
var react_theme_provider_1 = require("@fluentui/react-theme-provider");
function App() {
    var _a = React.useState("#0078d4"), primary = _a[0], setPrimary = _a[1];
    var theme = react_1.createTheme({
        palette: {
            themePrimary: primary,
        }
    });
    return (React.createElement("span", null,
        React.createElement("div", null,
            React.createElement(react_1.TextField, { value: primary, onChange: function (_, v) { return setPrimary(v || ""); }, label: "Primary color" })),
        React.createElement(react_theme_provider_1.ThemeProvider, { theme: theme },
            React.createElement("div", { className: "App" },
                React.createElement("header", { className: "App-header" },
                    React.createElement(ecosystem_coffeemug_1.Coffeemug, null),
                    React.createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "Learn React"))))));
}
exports.default = App;
