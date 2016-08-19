import React, { Component } from 'react'


class StateSample extends Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
  }

  plus = () => {
    const { state } = this
    this.setState({ counter: state.counter + 1 })
  }

  minus = () => {
    const { state } = this
    this.setState({ counter: state.counter - 1 })
  }

  render() {
    const { name } = this.state

    const {
        plus, minus,
        state: { counter }
    } = this

    console.info('render')

    return (
        <div>
          <p>{counter}</p>
          <br />
          <button onClick={this.plus}>+</button>
          <button onClick={this.minus}>-</button>
        </div>
    )
  }
}


export default StateSample