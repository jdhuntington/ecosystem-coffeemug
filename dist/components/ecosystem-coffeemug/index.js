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
import * as React from "react";
import { mergeStyles, PrimaryButton } from "@fluentui/react";
import { useTheme } from "@fluentui/react-theme-provider";
var defaultProps = {
    label: "Looks like somebody has a case of the Mondays!",
};
export var Coffeemug = function (props) {
    var theme = useTheme();
    var resolvedProps = __assign(__assign({}, defaultProps), props);
    var _a = React.useState(true), hasHandle = _a[0], setHasHandle = _a[1];
    var toggleHandle = React.useCallback(function () {
        setHasHandle(!hasHandle);
    }, [hasHandle, setHasHandle]);
    var mug = mergeStyles({
        position: "relative",
        height: "200px",
        width: "200px",
    });
    var handle = mergeStyles({
        position: "absolute",
        top: "40px",
        left: "00px",
        height: "100px",
        width: "60px",
        border: "10px solid",
        borderColor: theme.palette.themePrimary,
        "border-radius": "50px",
    });
    var label = mergeStyles({
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
        React.createElement(PrimaryButton, { onClick: toggleHandle }, hasHandle
            ? "I don't like the handle, take it away"
            : "Hrm, how about a handle?")));
};
