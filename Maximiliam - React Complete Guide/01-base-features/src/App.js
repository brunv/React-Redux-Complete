import React from 'react';
import './App.css';

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
