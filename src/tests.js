import React, { Component, PropTypes } from 'react'
import { RadioGroup, Radio } from 'react-radio-group'

const Question = ({ selected, onChange, question, option1, option2, option3 }) => (
  <div className="question">
    <RadioGroup name="gender" selectedValue={selected} value={selected} onChange={onChange}>
      <p>{question}</p>
      <label>
        <Radio value="1" />
        {option1}
      </label>
      <br />
      <label>
        <Radio value="2" />
        {option2}
      </label>
      <br />

      <label>
        <Radio value="3" />
        {option3}
      </label>
      <br />
    </RadioGroup>
  </div>
)

Question.propTypes = {
  selected: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,

  onChange: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
  option1: PropTypes.string.isRequired,
  option2: PropTypes.string.isRequired,
  option3: PropTypes.string.isRequired
}

class TestQuestions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questionNumber: 0,
      value: 0,
      resultValue: 0
    }
  }

  nextQuestion = () => {
    const { questionNumber, resultValue, value } = this.state

    this.setState({
      questionNumber: questionNumber + 1,
      resultValue: resultValue + +value,
      value: 0
    })

  }
  saveValue = value => {
    const { state } = this
    this.setState({ value })
  }

  questionBase = (questNumber) => {
    const {
      state: { value },
      saveValue
    } = this

    const arr = [
      <Question
        selected={value}
        onChange={saveValue}
        question="Укажите ваш пол"
        option1="Male"
        option2="Femail"
        option3="Other"
      />,
      <Question
        selected={value}
        onChange={saveValue}
        question="Укажите ваш год"
        option1="1999"
        option2="4821"
        option3="5412"
      />,

      <Question
        selected={value}
        onChange={saveValue}
        question="Укажите ваш рост"
        option1="174"
        option2="169"
        option3="184"
      />]

    return arr[questNumber]
  }

  render() {
    const {
      state: { questionNumber },
      questionBase, nextQuestion,
    } = this
    return (
      <div>
        {questionBase(questionNumber)}
        <input type="button" value="Следующий sвопрос" onClick={nextQuestion} />
      </div>
    )
  }
}

export default TestQuestions
