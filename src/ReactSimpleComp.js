import React from 'react'

const divStyle = {
  background: 'green',
  color: 'white',
  fontSize: 16
}

const parentStyle = {
  background: 'yellow'
}

const Content = () => {
  return <p style={parentStyle}>I am component</p>
}

const Div = (props) => {
  const children = props.children

  return (
      <div>
        Before
        {children}
        After
      </div>
  )
}

const Combo = () => (<Div><Content /></Div>)


export default Combo