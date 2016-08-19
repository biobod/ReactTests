import React, { Component } from 'react'


class TestQuestions extends Component{
  constructor(props) {
    super(props)
    this.state = { questionNumber: 0 }
  }
  nextQuestion =()=> {
    const { state } = this
   this.setState({questionNumber: state.questionNumber +1})

  }
  questionBase = (questNumber) => {
    const arr =  [<div className="question">
      <form><p>Укажите ваш пол</p>
        <label><input type="radio" name="gender" value="1"/>Malxe<br/></label>
        <label><input type="radio" name="gender" value="2"/>Female<br/></label>
        <label><input type="radio" name="gender" value="3"/>Other<br/></label>

      </form>
    </div>,
      <div className="question">
        <form><p>Укажите ваш год</p>
          <label><input type="radio" name="gender" value="1"/> 1999<br/></label>
          <label><input type="radio" name="gender" value="2"/> 1223<br/></label>
          <label><input type="radio" name="gender" value="3"/> 3c11<br/></label>

        </form>
      </div>,
      <div className="question">
        <form><p>Укажите ваш рост</p>
          <label><input type="radio" name="gender" value="1"/> 155<br/></label>
          <label><input type="radio" name="gender" value="2"/>180<br/></label>
          <label><input type="radio" name="gender" value="3"/> 175<br/></label>

        </form>
      </div>]
    return arr[questNumber]
  }

  render(){
    const {
        state: { questionNumber }
    } = this
  return (
<div>
   {this.questionBase(questionNumber)}
  <input type="button"  value="Следующий вопрос" onClick={this.nextQuestion}/>
</div>
  )
}
}

export default TestQuestions