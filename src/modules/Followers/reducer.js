import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import { fetchRequest, fetchSuccess, fetchFailure } from './actions'

const isLoading = handleActions(
  {
    [fetchRequest]: () => true,
    [fetchSuccess]: () => false,
    [fetchFailure]: () => false
  },
  false
)

const data = handleActions(
  {
    [fetchSuccess]: (_state, action) => action.payload
  },
  null
)

// selectors
export const getData = state => state.followers.data
export const getisLoading = state => state.followers.isLoading

export default combineReducers({
  isLoading,
  data
})
// Обратите внимание на тесты reducer.test.js
// Они помогут вам написать редьюсер
