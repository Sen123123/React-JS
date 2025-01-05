import React from 'react';
import ReactDOM from 'react-dom';
class Student extends React.Component {
    render() {
        return <h2>This is a test</h2>;
    }
}
ReactDOM.render(<Student />, document.getElementById("root"));