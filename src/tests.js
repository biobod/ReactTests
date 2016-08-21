import React, { Component } from 'react'
import {RadioGroup, Radio} from 'react-radio-group'


class TestQuestions extends Component{
  constructor(props) {
    super(props)
    this.state = {
      questionNumber: 0,
      value: 0,
      resultValue: 0,

    }
  }
  nextQuestion =()=> {
    const { state } = this
    this.setState({questionNumber: state.questionNumber +1})
    this.setState({resultValue: state.resultValue + +state.value})
    this.setState({value: 0})
    console.log(state.resultValue)


  }
  saveValue = (value) => {
    const { state } = this
    this.setState({value: value});

  }

  questionBase = (questNumber) => {
    const arr =  [<div className="question">
      <RadioGroup name="gender"  selectedValue={this.state.value } value={this.state.value} onChange={this.saveValue} >
        <p>Укажите ваш пол</p>
        <label><Radio value="1"/>Male<br/></label>
        <label><Radio value="2"/>Female<br/></label>
        <label><Radio value="3"/>Other<br/></label>


      </RadioGroup>
    </div>,
      <div className="question">
        <RadioGroup name="gender" selectedValue={this.state.value } value={this.state.value} onChange={this.saveValue}>
          <p>Укажите ваш год</p>
          <label><Radio value="1"/> 1999<br/></label>
          <label><Radio value="2"/> 1223<br/></label>
          <label><Radio value="3"/> 3121<br/></label>


        </RadioGroup>
      </div>,
      <div className="question">
        <RadioGroup name="gender" selectedValue={this.state.value} value={this.state.value} onChange={this.saveValue}>
          <p>Укажите ваш рост</p>
          <label><Radio value="1" />155<br/></label>
          <label><Radio value="2" />180<br/></label>
          <label><Radio value="3" />170<br/></label>

        </RadioGroup>
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
  <input type="button"  value="Следующий sвопрос" onClick={this.nextQuestion} />
  </div>
  )
}
}

export default TestQuestions