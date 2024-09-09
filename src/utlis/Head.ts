import { Component } from "react";
import * as ReactDOM from "react-dom";

const headRoot = document.head;

interface HeadProps {
    children: React.ReactNode;
}

export default class Head extends Component<HeadProps> {
    public render() {
        return ReactDOM.createPortal(this.props.children, headRoot);
    }
}