import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = () => {
    return (
        <h1>
           About Hello World
        </h1>
    );
}

ReactDOM.render(<HelloWorld />, document.getElementById("about"));