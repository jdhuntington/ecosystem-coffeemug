var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("components/ecosystem-coffeemug/index", ["require", "exports", "react", "@fluentui/react", "@fluentui/react-theme-provider"], function (require, exports, React, react_1, react_theme_provider_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Coffeemug = void 0;
    React = __importStar(React);
    /**
     * These are the default props
     */
    var defaultProps = {
        label: "Looks like somebody has a case of the Mondays!",
    };
    /**
     * This is the actual component.
     */
    exports.Coffeemug = function (props) {
        var theme = react_theme_provider_1.useTheme();
        var resolvedProps = __assign(__assign({}, defaultProps), props);
        var _a = React.useState(true), hasHandle = _a[0], setHasHandle = _a[1];
        var toggleHandle = React.useCallback(function () {
            setHasHandle(!hasHandle);
        }, [hasHandle, setHasHandle]);
        var mug = react_1.mergeStyles({
            position: "relative",
            height: "200px",
            width: "200px",
        });
        var handle = react_1.mergeStyles({
            position: "absolute",
            top: "40px",
            left: "00px",
            height: "100px",
            width: "60px",
            border: "10px solid",
            borderColor: theme.palette.themePrimary,
            "border-radius": "50px",
        });
        var label = react_1.mergeStyles({
            position: "absolute",
            top: "0",
            right: "0",
            background: theme.palette.themePrimary,
            bottom: "0",
            width: "160px",
            "border-radius": "5px",
            color: theme.palette.neutralPrimary,
            "font-family": "Helvetica",
            "text-align": "center",
            paddingTop: 30,
        });
        return (React.createElement("div", null,
            React.createElement("div", { className: mug },
                hasHandle && React.createElement("div", { className: handle }),
                React.createElement("div", { className: label }, resolvedProps.label)),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(react_1.PrimaryButton, { onClick: toggleHandle }, hasHandle
                ? "I don't like the handle, take it away"
                : "Hrm, how about a handle?")));
    };
});
define("App", ["require", "exports", "react", "components/ecosystem-coffeemug/index", "@fluentui/react", "@fluentui/react-theme-provider"], function (require, exports, React, ecosystem_coffeemug_1, react_2, react_theme_provider_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.App = void 0;
    React = __importStar(React);
    exports.App = function () {
        var _a = React.useState("#0078d4"), primary = _a[0], setPrimary = _a[1];
        var theme = react_2.createTheme({
            palette: {
                themePrimary: primary,
            }
        });
        return (React.createElement("span", null,
            React.createElement("div", null,
                React.createElement(react_2.TextField, { value: primary, onChange: function (_, v) { return setPrimary(v || ""); }, label: "Primary color" })),
            React.createElement(react_theme_provider_2.ThemeProvider, { theme: theme },
                React.createElement("div", { className: "App" },
                    React.createElement("header", { className: "App-header" },
                        React.createElement(ecosystem_coffeemug_1.Coffeemug, null),
                        React.createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "Learn React"))))));
    };
});
define("App.test", ["require", "exports", "react", "@testing-library/react", "App"], function (require, exports, react_3, react_4, App_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_3 = __importDefault(react_3);
    test('renders learn react link', function () {
        react_4.render(react_3.default.createElement(App_1.App, null));
        var linkElement = react_4.screen.getByText(/learn react/i);
        expect(linkElement).toBeInTheDocument();
    });
});
define("reportWebVitals", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var reportWebVitals = function (onPerfEntry) {
        if (onPerfEntry && onPerfEntry instanceof Function) {
            new Promise(function (resolve_1, reject_1) { require(['web-vitals'], resolve_1, reject_1); }).then(__importStar).then(function (_a) {
                var getCLS = _a.getCLS, getFID = _a.getFID, getFCP = _a.getFCP, getLCP = _a.getLCP, getTTFB = _a.getTTFB;
                getCLS(onPerfEntry);
                getFID(onPerfEntry);
                getFCP(onPerfEntry);
                getLCP(onPerfEntry);
                getTTFB(onPerfEntry);
            });
        }
    };
    exports.default = reportWebVitals;
});
define("index", ["require", "exports", "react", "react-dom", "App", "reportWebVitals", "./index.css"], function (require, exports, react_5, react_dom_1, App_2, reportWebVitals_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_5 = __importDefault(react_5);
    react_dom_1 = __importDefault(react_dom_1);
    reportWebVitals_1 = __importDefault(reportWebVitals_1);
    react_dom_1.default.render(react_5.default.createElement(react_5.default.StrictMode, null,
        react_5.default.createElement(App_2.App, null)), document.getElementById('root'));
    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals_1.default();
});
define("setupTests", ["require", "exports", "@testing-library/jest-dom"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
