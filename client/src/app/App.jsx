import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>haloooooo</h1>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));

