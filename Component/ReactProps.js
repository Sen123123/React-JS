import React from "react";
import ReactDOM from "react-dom";
class Customer React.Components {
    render() {
        return <h2>I am from {this.props.district}</h2>;
    }
}
class Details extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <customer district="Dhaka"/>
                </div> no miss
        );
    }
}
ReactDOM.render(<Details />, document.getElementById("root"));