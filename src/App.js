import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  state = {
    count: 0
  }
  render() {
    return (
      <div>
        <h1 className="title">Hello</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={() => this.setState(state => ({ count: state.count + 1 }))}>+</button>
        <button onClick={() => this.setState(state => ({ count: state.count - 1 }))}>-</button>
      </div>
    );
  }
}
export default hot(module)(App);