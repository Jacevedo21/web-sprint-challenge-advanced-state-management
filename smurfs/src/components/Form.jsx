import React, { useState } from 'react'
import { Form as ReactForm, Input, Button } from 'reactstrap'
import { addSmurf } from '../actions/index'
import { connect } from 'react-redux'

import styled from 'styled-components'

const StyledForm = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 50vw;
    margin: auto;
`

const Form = () => {
  const [input, setInput] = useState({})

  const handleChange = e => {

    setInput({ ...input, [e.target.name]: e.target.value })
  }

  return (
    <StyledForm>
      <ReactForm onSubmit={addSmurf(input)}>
        <Input type="text" name="name" value={input.name} onChange={handleChange} placeholder="Name" />

        <Input type="number" name="height" value={input.height} onChange={handleChange} placeholder="Height" />

        <Input type="number" name="age" value={input.age} onChange={handleChange} placeholder="Age" />

        <Button type="submit" style={{ width: '200px', margin: '20px'}} >Submit</Button>
      </ReactForm>
    </StyledForm>

  )
}

export default connect(null, { addSmurf })(Form)