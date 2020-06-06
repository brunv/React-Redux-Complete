import React from 'react';
import './App.css';
import Person from './Person/Person.js';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hi, this is a React App</h1>
//     </div>
//   );
// }

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Hi, this is a React App</h1>
                <Person name="Bruno" age="24"> I like my new Nintendo DS</Person>
                <Person name="Max" age="28">I'm the instructor</Person>
                <Person name="Andrew" age="26">I taught about Nodejs</Person >
            </div>
        );

        // This JSX above is compiled to this code:

        // return React.createElement(
        //   'div',
        //   { className: 'App' },
        //   React.createElement('h1', null, 'Hi, this is a React App')
        // );
    }
}

export default App;
