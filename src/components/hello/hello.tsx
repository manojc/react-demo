import * as React from "react";
import { HelloProps } from "../../model";

export class Hello extends React.Component<HelloProps, { date: Date }> {

    private timerID: number;

    public constructor(props: any) {
        super(props);
        this.state = { date: new Date() };
    }

    public componentDidMount(): void {
        this.timerID = setInterval(() => this.tick(), 1000);
        console.log("componentDidMount");
    }

    public componentWillUnmount(): void {
        clearTimeout(this.timerID)
        console.log("componentWillUnmount");
    }

    public render(): React.ReactNode {
        return (
            <div>
                <h1>
                    Hello from {this.props.compiler} and {this.props.framework}!
                </h1>
                <h2>
                    It is {this.state.date.toLocaleTimeString()}
                </h2>
            </div>
        );
    }

    private tick(): void {
        this.setState({
            date: new Date()
        });
    }
}