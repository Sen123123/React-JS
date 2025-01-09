import React from 'react';
import ReactDOM from 'react-dom';

class MyStyling extends React.Component {
    render() {
        const myheaderstyle = {
            color: "red",
            backgroundColor: "blue",
            fontFamily: "Comic Sans",
            padding: "7px"
        };
        const mystyle = {
            color: "yellow",
            backgroundColor: "green",
            fontFamily: "Arial",
            padding: "5px"
        };
        return (
            <div>
                <h1 style={myheaderstyle}>Hello</h1>
                <p style={mystyle}>Hi</p>
            </div>
        );
    }

}
ReactDOM.render(<MyStyling />, document.getElementById("root"));