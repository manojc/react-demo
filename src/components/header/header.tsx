import * as React from "react";
import { HelloProps } from "../../model";

export class Header extends React.Component<HelloProps, {}> {

    public constructor(props: any) {
        super(props);
    }

    public render(): React.ReactNode {
        return (
            <h1>
                Hello from {this.props.compiler} and {this.props.framework}!
            </h1>
        );
    }
}