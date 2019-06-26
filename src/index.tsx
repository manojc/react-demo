import * as React from "react";
import * as ReactDOM from "react-dom";
import { Store, createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { ReduxEmitter } from "kuker-emitters";
import { App } from "./components/app/app";
import { buttonToggleReducer } from "./reducers/app-reducer";
import "./index.css";

const store: Store = createStore(
    combineReducers({ buttonState: buttonToggleReducer }),
    applyMiddleware(ReduxEmitter())
);

ReactDOM.render(
    <Provider store={store}>
        <div className="container">
            <App />
        </div>
    </Provider>,
    document.getElementById("example")
);