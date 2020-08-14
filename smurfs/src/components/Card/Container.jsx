import React, { useEffect } from 'react'
import Card from './Card'
import { connect } from 'react-redux'
import { loadingData } from '../../actions'


const Container = (props) => {
  useEffect(() => {
    props.loadingData()
  }, [])
  return (
    <div>
      {props.characters.map(c => <Card key={c.id} character={c} />)}
    </div>
  )
}
const mapStateToProps = state => {
  return {
    characters: state.data
  }
}
// export default Container
export default connect(mapStateToProps, { loadingData })(Container)