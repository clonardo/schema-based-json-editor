/// <reference types="react" />
import * as React from "react";
import * as common from "../common";
export declare const icons: {
    [name: string]: common.Icon;
};
export declare type Props = {
    schema: common.Schema;
    initialValue: common.ValueType;
    updateValue: (value?: common.ValueType) => void;
    theme?: string;
    icon?: string;
    locale?: string;
    readonly?: boolean;
};
export declare class JSONEditor extends React.Component<Props, {}> {
    theme: common.Theme;
    locale: common.Locale;
    icon: common.Icon;
    constructor(props: Props);
    render(): JSX.Element | null;
}
