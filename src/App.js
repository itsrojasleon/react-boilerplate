import React from 'react'
import { hot } from 'react-hot-loader'

const Warning = React.lazy(() => import('./Warning'))

class App extends React.Component {
  state = {
    count: 0
  }
  increment = () => {
    this.setState(state => ({ count: state.count + 1 }))
  }
  decrement = () => {
    this.setState(state => ({ count: state.count - 1 }))
  }
  render() {
    return (
      <div>
        <h1 className="title">Hello</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <h2>
          Count:{' '}
          {this.state.count > 10 ? (
            <React.Suspense fallback={null}>
              <Warning />
            </React.Suspense>
          ) : (
            <div>{this.state.count}</div>
          )}
        </h2>
        <img src="https://avatars0.githubusercontent.com/u/27437337?s=460&v=4" />
      </div>
    )
  }
}
export default hot(module)(App)
