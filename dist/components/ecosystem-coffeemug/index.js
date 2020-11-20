"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coffeemug = void 0;
var React = __importStar(require("react"));
var react_1 = require("@fluentui/react");
var react_theme_provider_1 = require("@fluentui/react-theme-provider");
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
