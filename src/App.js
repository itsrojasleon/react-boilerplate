import React from 'react';
import { hot } from 'react-hot-loader';

const Warning = React.lazy(() => import('./Warning'));

class App extends React.Component {
  state = {
    count: 0
  }
  render() {
    return (
      <div>
        <h1 className="title">Hello</h1>
        <button onClick={() => this.setState(state => ({ count: state.count + 1 }))}>+</button>
        <button onClick={() => this.setState(state => ({ count: state.count - 1 }))}>-</button>
        <h2>Count: {this.state.count > 10 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}</h2>
      </div>
    );
  }
}
export default hot(module)(App);