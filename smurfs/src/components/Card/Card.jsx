import React from 'react'
import { deleteSmurf } from '../../actions'
import { connect } from 'react-redux'

import { Button } from 'reactstrap'
 
import styled from 'styled-components'

const StyledDiv = styled.div`
    border: 2px solid blue;
    padding: 20px;
    border-radius: 50vw;
    background-color: lightblue;
`


const Card = (props) => {
  console.log('should display', props)
  const { character } = props

  const handleDelete = e => {
    props.deleteSmurf(e.target.id)
  }

  return (
    <StyledDiv>
      <h3>{character.name}</h3>
      <p>{character.age} years old</p>
      <p>{character.height}</p>
      <Button id={character.id} onClick={e => handleDelete(e)}>Delete</Button>

    </StyledDiv>
  )
}

export default connect(null, { deleteSmurf })(Card)