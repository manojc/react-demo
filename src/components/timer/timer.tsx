import * as React from "react";
import { connect } from "react-redux";

interface Props {
    label?: string,
    buttonState?: boolean,
    showTime?: Function
    hideTime?: Function
};

class Timer extends React.Component<Props, { date: Date }> {

    private timerID: number;

    public constructor(props: any) {
        super(props);
        this.state = { date: new Date() };
    }

    public render(): React.ReactNode {
        return (
            <h2 className={!!this.props.buttonState ? "" : "hidden"}>
                It is {this.state.date.toLocaleTimeString()}
            </h2>
        );
    }

    public componentDidMount() {
        this.timerID = setInterval(() => this._start(), 1000);
    }

    public componentWillUnmount() {
        clearTimeout(this.timerID);
    }

    private _start(): void {
        this.setState({
            date: new Date()
        });
    }
}

function mapStateToProps(state: any): Object {
    return { buttonState: state.buttonState };
}

export default connect(mapStateToProps)(Timer);