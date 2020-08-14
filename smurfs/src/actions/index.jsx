import axios from 'axios'

export const LOAD_DATA = 'LOAD_DATA'
export const LOAD_SUCCESS = 'LOAD_SUCCESS'
export const LOAD_FAILURE = 'LOAD_FAILURE'
export const ADD_SMURF = 'ADD_SMURF'
export const DELETE_SMURF = 'DELETE_SMURF'

export const loadingData = () => {
    return dispatch => {
        dispatch({ type: LOAD_DATA })
        axios.get('http://localhost:3333/smurfs')
        .then(res => dispatch({ type: LOAD_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: LOAD_FAILURE, err}))
    }
}

export const addSmurf = (input) => {
    return dispatch => {
        axios.post('http://localhost:3333/smurfs', input)
        .then(res => dispatch({ type: ADD_SMURF, payload: res.data}))
        .catch(err => {console.log('BeepBoop error in loading: ', err)})
    }
}

export const deleteSmurf = (id) => {
    console.log('does delete work')
    return dispatch => {
        axios.delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => {
            dispatch({type: DELETE_SMURF, payload: res.data})
        })
        .catch(err =>{
            console.log('BeepBoop trouble deleting smurf: ', err)
        })
    }
}