import * as React from "react";
import { Button, mergeStyles, PrimaryButton } from "@fluentui/react";
import { useTheme } from "@fluentui/react-theme-provider"

/**
 * This is the props interface
 */
export interface Props {
  label: string;
}

/**
 * These are the default props
 */
const defaultProps: Props = {
  label: "Looks like somebody has a case of the Mondays!",
};

/**
 * This is the actual component.
 */
export const Coffeemug: React.FC<Partial<Props>> = (props: Partial<Props>) => {
  const theme = useTheme();
  const resolvedProps = { ...defaultProps, ...props };
  const [hasHandle, setHasHandle] = React.useState(true);
  const toggleHandle = React.useCallback(() => {
    setHasHandle(!hasHandle);
  }, [hasHandle, setHasHandle]);
  const mug = mergeStyles({
    position: "relative",
    height: "200px",
    width: "200px",
  });
  const handle = mergeStyles({
    position: "absolute",
    top: "40px",
    left: "00px",
    height: "100px",
    width: "60px",
    border: "10px solid",
    borderColor: theme.palette.themePrimary,
    "border-radius": "50px",
  });
  const label = mergeStyles({
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

  return (
    <div>
      <div className={mug}>
        {hasHandle && <div className={handle}></div>}
        <div className={label}>{resolvedProps.label}</div>
      </div>
      <br />
      <br />
      <PrimaryButton onClick={toggleHandle}>
        {hasHandle
          ? "I don't like the handle, take it away"
          : "Hrm, how about a handle?"}
      </PrimaryButton>
    </div>
  );
};
