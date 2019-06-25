import * as React from "react";

export class Button extends React.Component<{}, { label: string }> {

    public constructor(props: any) {
        super(props);
        this.state = { label: "click me" };
    }

    public render(): React.ReactNode {
        return (
            <button className="btn btn-primary btn-sm" onClick={this._onButtonClick}>
                click me
            </button>
        );
    }

    private _onButtonClick(e: any): void {
        alert("button was clicked!");
    }

}