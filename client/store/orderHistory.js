import axios from 'axios'

const CREATE_HISTORY = 'CREATE_HISTORY'
const READ_HISTORY = 'READ_HISTORY'
const DELETE_HISTORY = 'DELETE_HISTORY'

export const createHistory = history => ({type: CREATE_HISTORY, history})
const readHistory = history => ({type: READ_HISTORY, history})
export const deleteHistory = () => ({type: DELETE_HISTORY})

export function getHistory(){
  return function thunk(dispatch){
    axios.get('/api/orderHistory')
    .then(res => res.data)
    .then(history => dispatch(readHistory(history)))
    .catch(err => console.log(err))
  }
}

export default function orderHistoryReducer(state = [], action){
  switch (action.type){
    case CREATE_HISTORY:
      return [...state, action.history]
    case READ_HISTORY:
      return action.history
    case DELETE_HISTORY:
      return []
    default:
      return state
  }
}
