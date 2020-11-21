/// <reference types="react" />
declare module "components/ecosystem-coffeemug/index" {
    import * as React from "react";
    /**
     * This is the props interface
     */
    export interface Props {
        label: string;
    }
    /**
     * This is the actual component.
     */
    export const Coffeemug: React.FC<Partial<Props>>;
}
declare module "App" {
    export const App: () => JSX.Element;
}
declare module "App.test" { }
declare module "reportWebVitals" {
    import { ReportHandler } from 'web-vitals';
    const reportWebVitals: (onPerfEntry?: ReportHandler | undefined) => void;
    export default reportWebVitals;
}
declare module "index" {
    import './index.css';
}
declare module "setupTests" {
    import '@testing-library/jest-dom';
}
