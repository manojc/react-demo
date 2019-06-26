import * as React from "react";
import Timer from "../timer/timer";
import Button from "../button/button";
import { Header } from "../header/header";

export class App extends React.Component<{}> {

    public constructor(props: any) {
        super(props);
    }

    public render(): React.ReactNode {
        return (
            <div>
                <Header compiler="Typescript" framework="React JS" />
                <Timer />
                <Button label="toggle timer" />
            </div>
        );
    }
}