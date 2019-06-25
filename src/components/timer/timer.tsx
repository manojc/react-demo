import * as React from "react";
import { HelloProps } from "../../model";


export class Timer extends React.Component<{}, { date: Date }> {

    private timerID: number;

    public constructor(props: any) {
        super(props);
        this.state = { date: new Date() };
    }

    public componentDidMount(): void {
        this.timerID = setInterval(() => this._tick(), 1000);
        console.log("componentDidMount");
    }

    public componentWillUnmount(): void {
        clearTimeout(this.timerID)
        console.log("componentWillUnmount");
    }

    public render(): React.ReactNode {
        return (
            <h2>
                It is {this.state.date.toLocaleTimeString()}
            </h2>
        );
    }

    private _tick(): void {
        this.setState({
            date: new Date()
        });
    }
}