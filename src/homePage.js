import React, { Component, PropTypes } from 'react'
import TestQuestions from './tests';
import ReactDOM from 'react-dom'


class HomePage extends Component {
  showTestPage() {
    ReactDOM.unmountComponentAtNode(document.getElementById('main-div'))
    ReactDOM.render(
        <TestQuestions />,
        document.getElementById('test-page')
    )
  }
  render() {
    return (
        <div id="mainBlock">
          <div id="header">
            <h2>Введите свои данные</h2>
            <form id="authorize">
              <input type="text" required placeholder="Имя" name="firstname"/>
              <input type="text" required placeholder="Фамилия" name="surname"/>
              <input type="text" required pattern="\S+@([a-z]|[0-9])+.[a-z]+" placeholder="Почта" name="email"/>
              <input type="submit" value="Начать тест" onClick={this.showTestPage} />
            </form>
          </div>
        </div>
    )
  }

}

class Wrapper extends Component {
  constructor(){
    super()
  }
  render(){
    return(
        < HomePage/>
    )
  }
}
export default Wrapper