import * as React from "react";
import { connect } from "react-redux";

interface Props {
    label?: string,
    buttonState?: boolean,
    showTime?: Function
    hideTime?: Function
};

class Button extends React.Component<Props, { label: string }> {

    public constructor(props: any) {
        super(props);
    }

    public render(): React.ReactNode {
        return (
            <button className="btn btn-primary btn-sm" onClick={this._onButtonClick.bind(this)}>
                {this.props.label}
            </button>
        );
    }

    private _onButtonClick(e: any): void {
        !this.props.buttonState ? this.props.showTime() : this.props.hideTime();
    }
}

function mapStateToProps(state: any): Object {
    return { buttonState: state.buttonState };
}

function mapDispatchToProps(dispatch: (action: { type: string, payload: any }) => void): Object {
    return {
        showTime: () => dispatch({ type: "SHOW", payload: true }),
        hideTime: () => dispatch({ type: "HIDE", payload: false }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);