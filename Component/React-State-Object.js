import React from "react";
import ReactDOM from "react-dom";
class Student extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Rehya",
            grade: 7,
            favourite_color: "yellow",
            favourite_subject: "Geometry.D",
        };
    }
    changegrade = () => {
        this.setState({ grade: 11 });
    }
    render() {
        return (
            <div>
                <h1>My name is {this.state.name}</h1>
                <h1>My grade is {this.state.grade}</h1>
                <h1>My favourite color is {this.state.favourite_color}</h1>
                <h1>My favourite subject is {this.state.favourite_subject}</h1>
                <button onClick={this.changegrade}>Click Me</button>
            </div>
        );
    }
}
ReactDOM.render(<Student />, document.getElementById("root"));